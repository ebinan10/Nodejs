const mongoose = require('mongoose')
const Db6 = require('../../model/Db6');
const User = require('../../model/User');

exports.CreateWard = async(req, res, next) =>{
    try{
        const {_id}= req.body
       const user = await User.find({userid:userid})
       const id = mongoose.Types.ObjectId(user._id)
    await Db6.create({ _id })
    res.status(200).json('ward created successfully');
}
catch(err){
    console.log(err);
    res.status(400).json("an error just occured");
}}