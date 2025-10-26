import mongoose from "mongoose"

export const connectDb =  async () =>{
    try{
 await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected successfully")
    }catch(error){
        console.error(error)
        process.exit(1)// exit with fail
    }
}



