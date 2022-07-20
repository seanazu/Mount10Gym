const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id:  {
        type: String,
        required: true,
      },
    header:{
        type: String,
        required: true,
      },
    subHeader: {
        type: String,
        required: true,
      },
    firstParagraph: {
        type: String,
        required: true,
      },
    secondParagraph:{
        type: String,
        required: true,
      },
    image:{
        type: String,
        required: true,
      }
}, {
    collection: 'text-and-image'
})

module.exports = mongoose.model('TextAndImage', userSchema)