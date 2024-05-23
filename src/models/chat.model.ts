import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    mensajes: { type: Array, required: true }
});

export default mongoose.model('Chat', chatSchema);