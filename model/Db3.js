const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchemaMongoose3 = new Schema(
    {
        id:{
            type:Number,
            required:true
        }
    }
)

module.exports = mongoose.model('SchemaMongoose3',SchemaMongoose3)