var nodemailer=require('nodemailer');
module.exports={
    mailVerification:(email,callback)=>{
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MAIL_ID,
        pass:process.env.MAIL_PASS
    }
});
var mailOptions={
    from:process.env.MAIL_ID,
    to:email,
    subject:'You registered in the 36',
    text:'Testing2',
    html:'<html><body><h1>Thank you</h1></body></html>'
};

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log("error "+err);
        return callback(err);
    }
    return callback(null,true);
});
    }
};