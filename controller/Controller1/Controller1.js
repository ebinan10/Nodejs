const LGA = require('../../model/Db1')

exports.createLga = async(req, res, next) =>{
   try{ 
    const {id} =req.body
    await Db.create({ id})
    console.log("successful");
    res.status(200).json( `id is created successfully`);
}
catch(err){
    console.log(err);
    res.status(400).json("an error has occured")
}
}