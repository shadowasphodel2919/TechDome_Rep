import { Star, ExternalLink, Users } from 'lucide-react'
import styles from './CourseCard.module.css'

const CourseCard = ({ course }) => {
    if (!course) return null

    const {
        title,
        url,
        image_240x135,
        headline,
        avg_rating,
        num_subscribers,
        visible_instructors,
        price,
        is_paid
    } = course

    const rating = parseFloat(avg_rating || 0).toFixed(1)
    const subscribers = num_subscribers
        ? num_subscribers >= 1000
            ? `${(num_subscribers / 1000).toFixed(1)}k`
            : num_subscribers
        : null
    const instructor = visible_instructors?.[0]?.display_name || 'Unknown Instructor'
    const courseUrl = url ? `https://www.udemy.com${url}` : '#'

    return (
        <a
            href={courseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`View course: ${title}`}
        >
            {/* Thumbnail */}
            <div className={styles.thumbnail}>
                {image_240x135 ? (
                    <img src={image_240x135} alt={title} loading="lazy" />
                ) : (
                    <div className={styles.thumbnailPlaceholder}>
                        <span>Course</span>
                    </div>
                )}
                <div className={styles.priceBadge}>
                    {!is_paid || price === '0' || price === 'Free' ? (
                        <span className="badge badge-success">Free</span>
                    ) : (
                        <span className="badge badge-gold">{price}</span>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                <h3 className={styles.title} title={title}>{title}</h3>
                {headline && (
                    <p className={styles.headline}>{headline}</p>
                )}
                <p className={styles.instructor}>{instructor}</p>

                <div className={styles.meta}>
                    {avg_rating > 0 && (
                        <div className={styles.rating}>
                            <Star size={12} fill="currentColor" />
                            <span>{rating}</span>
                        </div>
                    )}
                    {subscribers && (
                        <div className={styles.students}>
                            <Users size={12} />
                            <span>{subscribers}</span>
                        </div>
                    )}
                    <ExternalLink size={12} className={styles.extIcon} />
                </div>
            </div>
        </a>
    )
}

export default CourseCard
