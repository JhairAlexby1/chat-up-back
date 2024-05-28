import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, required: true },
    mensajes: [{ type: mongoose.Schema.Types.ObjectId, required: true }]
});

export default mongoose.model('Chat', chatSchema);