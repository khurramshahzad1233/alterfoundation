import catchasyncerror from "../middleware/catchasyncerror.js";
import Errorhandler from "../utils/errorhandler.js"
import sendEmail from "../utils/sendEmail.js"


export const contactformcontroller=catchasyncerror(async(req,res,next)=>{
    const {name,email,message}=req.body;
   

    if(!name ||!email ||!message){
        return next(new Errorhandler("All fields are required",400))
    };
    const from=email;
    const subject="contact form";
    const text=`Name: ${name},\n Email: ${email}. \n Query: ${message}`;

    await sendEmail(from, subject, text);

    res.status(200).json({
        success:true,
        message:"your message has been sent"
    })
});


export const involveformcontroller=catchasyncerror(async(req,res,next)=>{
    const {name,email,phoneno,city,country,category}=req.body;
   

    if(!name ||!email ||!phoneno ||!city ||!country ||!category){
        return next(new Errorhandler("All fields are required",400))
    };
    const from=email;
    const subject="Join Us";
    const text=`Hi, Name: ${name}, \n Email: ${email}. \n Contact:${phoneno}, \n City: ${city}, Country: ${country} \n Volunteer Work Field: ${category}`;

    await sendEmail(from, subject, text);

    res.status(200).json({
        success:true,
        message:"your message has been sent"
    })
});



