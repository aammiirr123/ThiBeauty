import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "token not found" })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Invalid email" })
        }
        next()
    } catch (error) {
        console.log("AUTH Error:",error)
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth