const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const headerSchema = new Schema({
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
    collection: 'page-header'
})

module.exports = mongoose.model('headerSchema', headerSchema)
