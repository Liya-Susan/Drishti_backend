import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const requestSchema = new Schema({
    location:{
        type:String,
        required:true,
        unique:true,
    },
    phonenumber:{
        type:String,
        required:true,
        unique:true,
    },
    grade:{
        type: String,
        required: true,
    },
    alert:{
        type: String,
        required: true,
    },
    details:{
        type: String,
        required: true,
    },
    Faculty:{
        type: String,
        required: true,
    },
    
    
});
export default mongoose.model('Admin',requestSchema);