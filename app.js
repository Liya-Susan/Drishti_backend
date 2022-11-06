import express from 'express';
import mongoose from 'mongoose';
import requestRouter from "./routes/request-routes";
import cors from 'cors'
const app = express();

app.use(cors());


app.use(express.json());

app.use('/api/request',requestRouter);

mongoose.connect('mongodb+srv://admin:friendlyneighbourhoodtekys@cluster0.bq2w50o.mongodb.net/define?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("connected to database")).catch((err)=>console.log(err));

