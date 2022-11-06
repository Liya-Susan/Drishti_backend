import mongoose from "mongoose";
import Admin from "../model/Request";
import User from "../model/User";

export const getAllRequests = async(req,res,next)=>{
    let requests;
    try{
        requests= await Admin.find();
    }catch(err){
        return console.log(err);
    }
    if (!requests){
        return res.status(404).json({message:"requests not found"});
    }
    return res.status(200).json({requests});
};



