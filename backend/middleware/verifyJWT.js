const jwt = require('jsonwebtoken')
// check whether the JWT token sent from front-end is valid before calling next() which will move execution further from where it's called
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: JWT Not matched' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            req.user = decoded.UserInfo.username
            req.email = decoded.UserInfo.email
            req.mobile = decoded.UserInfo.mobile
            req.fields = decoded.UserInfo.fields
            next()//will send execution to point where it's called > Ex. userRoutes
        }
    )
}

module.exports = verifyJWT 