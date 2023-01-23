const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchemaMongoose = new Schema(
    {
       id:{
            type:Schema.Types.ObjectId,
            ref:'SchemaMongooseDetails',
            required:true
        }
    }
)

module.exports = mongoose.model('SchemaMongoose',SchemaMongoose)