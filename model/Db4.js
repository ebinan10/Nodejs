const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchemaMongoose4 = new Schema(
    {
        state_id:{
            type:Number,
            required:true
        },
        state_name:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('SchemaMongoose4',SchemaMongoose4)