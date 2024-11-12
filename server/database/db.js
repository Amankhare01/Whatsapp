import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const Connection =async()=>{
const URL =`mongodb+srv://${USER}:${PASS}@user.xlta4pz.mongodb.net/whatsapp`
try {
    await mongoose.connect(URL);
    console.log("Database Connected Successfuly");
} catch (error) {
    console.log("Error while connecting Database ", error.message)
}
}
export default Connection;