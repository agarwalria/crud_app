import mongoose from "mongoose";

//structure of document
const courseSchema = new mongoose.Schema({
    course_code : {
        type : String,
        required : true
    },
    course_title: {
        type : String,
        required : true
    },
    credits : {
        type : Number,
        required : true
    },
    department :{
        type : String,
        required : true
    },
})

//collection creation
const CourseModel = mongoose.model("course",courseSchema);

export default CourseModel;

//document creation
// const createDocument = async()=>{
//     try{
//         const course1 = new CourseModel({
//             course_code : 'MA 502',
//             course_title : 'Number Theory',
//             credits : 4.0,
//             department : 'Mathematics'
//         })
//         const result = await course1.save();
//         console.log (result);

//     }catch(err){
//         console.log(err);
//     }
// }
// createDocument();