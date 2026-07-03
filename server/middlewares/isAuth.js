import jwt from "jsonwebtoken"


const isAuth = async(req,res,next) => {
   const { token } = req.cookies

   if(!token){
      return res.status(401).json({message:"user does not have a token"})
   }

   const jwtSecret = process.env.JWT_SECRET || process.env.JWTSECRET;
   if (!jwtSecret) {
      return res.status(500).json({message:"JWT secret is not configured"})
   }

   try{
      const verifyToken = jwt.verify(token, jwtSecret)

      if(!verifyToken?.userId && !verifyToken?.id){
         return res.status(401).json({message:"user does not have a valid token"})
      }
      req.userId = verifyToken.userId || verifyToken.id
      next()
   } catch(error){
       res.clearCookie("token")
       return res.status(401).json({message:"user session expired or is invalid"})
   }
}

export default isAuth 
