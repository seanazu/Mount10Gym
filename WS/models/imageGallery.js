const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const imageGallerySchema = new Schema ({
    _id:{
        required:true,
        type:String
    },
    images:[
        {
            _id:false,
            Key:{
                required:true,
                type:String
            }
        }
    ]
}, {
    collection: 'image-gallery'
})

module.exports = mongoose.model('imageGallerySchema', imageGallerySchema);