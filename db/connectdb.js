import mongoose from 'mongoose'

const connectDB = async(databaseURL) => {
    try{
        const dbDetails = {
            dbName : 'coursedb',
        };
        await mongoose.connect(databaseURL,dbDetails);
        console.log("Connected Successfully...");
    } catch(err){
        console.log(err);
    }
    
};
export default connectDB;

// mongoose.connect('mongodb://localhost:27017/hello').then(()=>{
//     console.log("Successful")
// }).catch((err)=>console.log(err));