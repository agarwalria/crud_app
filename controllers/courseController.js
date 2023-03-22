import CourseModel from "../models/course_model.js";

class CourseController  {
    static addDoc= (req,res)=>{
        res.render("add");
    }

//--------------------------------------------------------------------------------------------------------------------------
    
    static createDoc = async(req,res)=>{
        try{
            //console.log("Submit button hit");
            //console.log(req.body);
            const {code, title, credits, department} = req.body;
            const doc = new CourseModel({
                course_code : code,
                course_title : title,
                credits : credits,
                department : department
            })
            const result=await doc.save();
            //console.log(result);
            res.redirect("/");

        }catch(error){
           console.log(error);
        }
    }

//--------------------------------------------------------------------------------------------------------------------------

    static getAllDoc = async(req,res)=>{
        try{
            const data = await CourseModel.find();
            //console.log(data);
            res.render("index",{data:data});
        }
        catch(error){
            console.log(error);
        }
    }

//--------------------------------------------------------------------------------------------------------------------------

    static editDoc = async(req,res)=>{
        try{
            const id=req.params.id;
            const result=await CourseModel.findById(id);
            res.render('edit',{data:result});
        //console.log(req.params.id);

        }
        catch(error){
            console.log(error);
        }
    }

//--------------------------------------------------------------------------------------------------------------------------

    static updateById = async(req,res)=>{
        try{
            //console.log(req.body);
             const result = await CourseModel.findByIdAndUpdate(req.params.id,req.body);
            console.log(req.body);
            res.redirect('/');
        }
        catch(error){
            console.log(error);
        }
    }

//--------------------------------------------------------------------------------------------------------------------------

    static deleteById = async(req,res)=>{
        try{
            //console.log(req.params.id)
            const data = await CourseModel.findByIdAndDelete(req.params.id);
            //console.log(data);
            res.redirect('/');
        }
        catch(error){
            console.log(error);
        }
    }
}

// const CourseController= (req,res)=>{
//              res.render("index");
//         }

export default CourseController;