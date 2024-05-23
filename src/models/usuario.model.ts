import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    conectado: { type: Boolean, default: false}
});

export default mongoose.model('Usuario', usuarioSchema);