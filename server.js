import express from 'express';
import connectDB from './db/connectDB.js';
import { join } from 'path';
import web from './routes/web.js';
//const dotenv = require('dotenv');

const app = express();


//dotenv.config({path:'config.env'})
const port = process.env.PORT || '8080';

//connect database
const databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017"
connectDB(databaseURL);

app.use(express.urlencoded({extended:false}));

//static files
app.use(express.static(join(process.cwd(),'public')));
app.use('/edit',express.static(join(process.cwd(),'public')));

//set template engine
app.set("view engine",'ejs');

//load routes
app.use('/',web)
//app.get('/add',web);
// app.get('/',(req,res)=>{
//     res.render('index')
// });

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})