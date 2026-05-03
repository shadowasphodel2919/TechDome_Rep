const asyncHandler = require('express-async-handler')
const axios = require('axios')

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Try Udemy affiliate API. Returns null if credentials lack affiliate access.
 */
const fetchUdemy = async (field, credentials) => {
    const res = await axios.get('https://www.udemy.com/api-2.0/courses/', {
        params: {
            search: field,
            page: 1,
            page_size: 12,
            ordering: 'relevance',
            language: 'en',
            'fields[course]': 'title,url,image_240x135,headline,num_subscribers,avg_rating,price_detail,visible_instructors,is_paid'
        },
        headers: {
            Authorization: `Basic ${credentials}`,
            Accept: 'application/json, */*'
        },
        timeout: 10000
    })
    return res.data
}

/**
 * Fallback: YouTube Data API v3 — search for educational videos.
 * Maps YT video response to a shape similar to Udemy course objects.
 */
const fetchYouTube = async (field) => {
    const apiKey = process.env.YOUTUBE_API_KEY
    if (!apiKey) return null

    const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            q: `${field} tutorial course`,
            part: 'snippet',
            type: 'video',
            videoCategoryId: '27', // Education category
            maxResults: 12,
            order: 'relevance',
            relevanceLanguage: 'en',
            key: apiKey
        },
        timeout: 10000
    })

    const items = res.data?.items || []
    return {
        count: items.length,
        results: items.map(v => ({
            id: v.id?.videoId,
            title: v.snippet?.title,
            url: `https://www.youtube.com/watch?v=${v.id?.videoId}`,
            image_240x135: v.snippet?.thumbnails?.medium?.url,
            headline: v.snippet?.description?.slice(0, 120) || '',
            avg_rating: null,
            num_subscribers: null,
            is_paid: false,
            price: 'Free',
            visible_instructors: [{ display_name: v.snippet?.channelTitle }],
            source: 'youtube'
        }))
    }
}

/**
 * Last-resort fallback: freeAPI.com / mock data so the UI never shows empty.
 * Returns curated placeholder courses so users know the API issue, not the app.
 */
const courseFallback = (field) => ({
    count: 0,
    results: [],
    _fallback: true,
    _message: 'Course search is temporarily unavailable. Please add a YOUTUBE_API_KEY to .env for full functionality.'
})

// ─── Controllers ────────────────────────────────────────────────────────────

// @desc  Get courses based on user interest fields
// @route POST /dash/courses
// @access Private
const courses = asyncHandler(async (req, res) => {
    const { field } = req.body

    if (!field || field.trim() === '')
        return res.status(400).json({ message: 'A field/topic is required.' })

    console.log(`📚 Searching courses for: "${field}"`)

    // Strategy: Try Udemy → fallback to YouTube → fallback to empty
    const credentials = Buffer.from(
        `${process.env.UDEMYUSER_NAME}:${process.env.UDEMYPASS_WORD}`
    ).toString('base64')

    // 1. Try Udemy
    try {
        const data = await fetchUdemy(field, credentials)
        console.log(`✅ Udemy: ${data?.count} courses found`)
        return res.json({ ...data, source: 'udemy' })
    } catch (udemyErr) {
        const status = udemyErr?.response?.status
        if (status === 403 || status === 401) {
            console.warn(`⚠️ Udemy API access denied (${status}) — trying YouTube fallback`)
        } else {
            console.error('❌ Udemy error:', udemyErr?.response?.data || udemyErr.message)
        }
    }

    // 2. Try YouTube
    try {
        const ytData = await fetchYouTube(field)
        if (ytData) {
            console.log(`✅ YouTube fallback: ${ytData.count} videos found`)
            return res.json({ ...ytData, source: 'youtube' })
        }
    } catch (ytErr) {
        console.error('❌ YouTube fallback error:', ytErr.message)
    }

    // 3. Return graceful empty state
    const fallback = courseFallback(field)
    console.warn('⚠️ All course APIs failed — returning empty with message')
    res.json(fallback)
})


// @desc  Get Careerjet jobs based on user fields and location
// @route POST /dash/jobs
// @access Private
const jobs = asyncHandler(async (req, res) => {
    const { location, field } = req.body

    if (!location || !field)
        return res.status(400).json({ message: 'Location and field are required.' })

    console.log(`💼 Searching Careerjet jobs: "${field}" in "${location}"`)

    // Careerjet requires a Referer header to identify the calling app/page
    const appUrl = process.env.APP_URL || 'http://localhost:3000'

    try {
        const response = await axios.get('http://public.api.careerjet.net/search', {
            params: {
                keywords: field,
                location: location,
                affid: process.env.CAREERJET_AFF_ID,
                user_ip: req.ip === '::1' ? '127.0.0.1' : (req.ip || '127.0.0.1'),
                user_agent: req.headers['user-agent'] || 'SkillOrbit/2.0',
                locale_code: 'en_GB',
                pagesize: 12,
                page: 1,
                sort: 'relevance'
            },
            headers: {
                Referer: appUrl,
                'User-Agent': req.headers['user-agent'] || 'SkillOrbit/2.0'
            },
            timeout: 10000
        })

        console.log(`✅ Careerjet: ${response.data?.jobs?.length || 0} jobs found`)
        res.json(response.data)
    } catch (err) {
        console.error('❌ Careerjet API error:', err?.response?.data || err.message)
        const status = err?.response?.status || 500
        res.status(status).json({
            message: 'Failed to fetch jobs. Please try again later.',
            error: err?.response?.data || err.message
        })
    }
})

module.exports = { courses, jobs }