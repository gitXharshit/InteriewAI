import jwt from 'jsonwebtoken'

const genToken = async(userId)  => {
    try {
       const jwtSecret = process.env.JWT_SECRET || process.env.JWTSECRET;
       if (!jwtSecret) {
        throw new Error("JWT secret is not configured");
       }

       const token = jwt.sign({ userId }, jwtSecret, { expiresIn: "7d" });
       return token;
    } catch (error) {
        console.log(error)
    }
}

export default genToken;
