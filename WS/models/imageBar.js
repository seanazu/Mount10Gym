const mongoose = require('mongoose');
const Schema = mongoose.Schema

const imageBarSchema = new Schema({
    _id: {
        type: String,
        required: true,
      },
    header: {
        type: String,
        required: true,
      },
    subHeader: {
        type: String,
        required: true,
      },
    image: {
        type: String,
        required: true,
      }
}, {
    collection: 'image-bar'

})

module.exports = mongoose.model('imageBarSchema', imageBarSchema)