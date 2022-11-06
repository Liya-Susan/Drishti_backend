import express from 'express';
import {  getAllRequests} from '../controllers/request-controller';

const requestRouter = express.Router();

requestRouter.get("/",getAllRequests);



export default requestRouter;