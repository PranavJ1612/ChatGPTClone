const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const colors = require("colors")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const errorHandler = require("./middlewares/errorMiddleware");
//routes path
const authRoutes = require('./routes/authRoutes');


//dotenv
dotenv.config()

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler)

const PORT = process.env.PORT || 8080

//API Routes
app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/openai', require("./routes/openapiRoutes"));

//listen serever
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} on ${PORT}`) 
})