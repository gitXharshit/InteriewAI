import genToken from "../config/token.js"
import User from "../models/user-models.js"


export const googleAuth = async(req,res) => {
    try{
        const {email, name} = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({email, name});

        }
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly:true,
            secure: true,
            sameSite: "none",
            maxAge: 7*24*60*60*1000
        })
        
        return res.status(200).json(user)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:`Google auth error ${error}`})
    }
}

export const logout = async(req,res) => {
    try{
       await res.clearCookie("token")
       return res.status(200).json({message:"Logout Successfully"})
    } catch(error){
        res.status(500).json({message:`Logout error ${error}`})
    }  
}
