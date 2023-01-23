const Db3 = require('../../model/Db3');

exports.unitInfo = async ( req, res, next) =>{
   try {
    const {_id } = req.body
    await Db3.create({
        _id
    })
    res.status(200).json('_id created successfully');
}
catch(err){
    console.log(err);
    res.status(400).json(" an error has occured")
}
}