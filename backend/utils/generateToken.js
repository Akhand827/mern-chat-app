import jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: "15d",
    })
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //MS
        httpOnly: true, //prevent XSS attacks by disallowing client-side JS to access the cookie
        sameSite: "strict", //CSRF protection
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;