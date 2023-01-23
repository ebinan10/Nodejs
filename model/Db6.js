const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchemaMongoose5 = new Schema(
    {
       id:{
            type:Number,
            required:true
        }
    }
)

module.exports = mongoose.model('Ward', SchemaMongoose5);

