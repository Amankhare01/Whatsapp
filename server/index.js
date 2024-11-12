import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import route from './routes/routes.js'
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route)
const PORT = 8080;
import Connection from './database/db.js';
Connection();
app.listen(PORT,()=> console.log(`Server running on Port ${PORT}`))