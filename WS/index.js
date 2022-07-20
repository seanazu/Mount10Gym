const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser'); 
const barDataRoute = require('./routes/textAndImage.route');
const mongoose = require('mongoose'); 
require('dotenv').config();
const url = process.env.MONGODB_URL;
  
const imagesRoute = require('./routes/images.route');
const headersRoute = require('./routes/headers.route');
const imageBarRoute = require('./routes/imageBar.route');
const imageGalleryRoute = require('./routes/imageGallery.route');
const hoverImageRoute = require('./routes/hoverImage.route');
const workerCardRoute = require('./routes/workerCard.route');
const ContactInfoRoute = require('./routes/contactInfo.route');
const lessonBoxRoute = require('./routes/lessonBox.route');
const pricingRoute = require('./routes/pricing.route');
const homeTextRoute = require('./routes/homeText.route');
const pageCardRoute = require('./routes/pageCard.route');
const basketballCardRoute = require('./routes/basketballCard.route');
const userAccessRoute = require('./routes/userAccess.route');
const emailRoute = require('./routes/email.route');

const app = express();
const PORT = process.env.PORT || 8080 ; 
         
app.use(cors()); 
app.use(bodyParser.urlencoded({extended : false})).use(bodyParser.json()) ; 
app.use(express.json());
app.use('/textAndImage', barDataRoute);
app.use('/images', imagesRoute);
app.use('/headers', headersRoute);
app.use('/imageBar', imageBarRoute);
app.use('/gallery', imageGalleryRoute);
app.use('/hoverImage', hoverImageRoute);
app.use('/workerCard', workerCardRoute);
app.use('/contactInfo', ContactInfoRoute);
app.use('/lessonBox', lessonBoxRoute);
app.use('/pricing', pricingRoute);
app.use('/homeText', homeTextRoute);
app.use('/pageCard', pageCardRoute);
app.use('/basketballCard', basketballCardRoute);
app.use('/userAccess', userAccessRoute);
app.use('/email', emailRoute);


mongoose.connect(url, {
    useNewUrlParser: true , 
    useUnifiedTopology :true 
})
.then(()=>{
    console.log('connected to db');
    app.listen(PORT,() =>{
    console.log(`The server is up on port ${PORT}`)
});
})
.catch((err) => console.log(err))














