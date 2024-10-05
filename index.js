const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const universityRoute = require('./routes/universityRoutes');
const addUniversityRoute = require('./routes/addUniversityRoute')
const aboutUniversityRoute = require('./routes/aboutUniversityRoute')
const cors = require("cors")

const PORT = process.env.PORT || '8000';

const app = express();


/** MiddleWare */

app.use(bodyParser.json());
app.use(cors());
app.use('/api', userRoutes);
app.use('/course',courseRoutes);
app.use('/university',universityRoute);
app.use('/addUniversity',addUniversityRoute);
app.use('/aboutUniversity',aboutUniversityRoute);

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})