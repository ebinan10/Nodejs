const User = require('../../model/User')
const nodemailer = require('nodemailer')

exports.createUser = async(req,res,next)=>
{
    const { name,email,password} = req.body
     User.findOne({email:email},async function(err,result){
        console.log(result)
        if(err){
            res.status(401).json('error encountered')
            
            }
           else if(result === null){
            console.log("null")
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'udehnanakumo',
                  pass: 'jtjyrocswyzageds'
                }
              });
              
              var mailOptions = {
                from: 'udehnanakumo@gmail.com',
                to: `${email}`,
                subject: 'Workout Account created',
                text: `Your workout account has been created successfully, 
                please follow the link below to activate your account!`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
   const response =  await User.create({name:name, email:email,password:password})
    res.status(200).json('user created successfully');
    console.log("successful");
    console.log(response)
   
}
else{
    console.log('available')
        res.status(403).json('a user with this account already exist')
    }
    }
        )
    
    

}

exports.getUser = async(req, res, next) =>{
    res.status(200).json('user is logged successfully');
    console.log("user is logged successfully");
} 