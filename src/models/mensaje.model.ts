import mongoose from 'mongoose';

const mensajeSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    usuario: { type: String, required: true }
});

export default mongoose.model('Mensaje', mensajeSchema);