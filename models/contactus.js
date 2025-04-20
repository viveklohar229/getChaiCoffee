import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ContactusSchema = new Schema({
    name: { type: String},
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    });

 
export default mongoose.models.Contactus || model("Contactus", ContactusSchema);;