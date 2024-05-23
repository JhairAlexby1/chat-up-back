import MensajeModel from "../models/mensaje.model";
import MensajeType from "../types/mensaje.type";

export default class MensajeService
{
    public static async crearMensaje(mensaje: MensajeType): Promise<void>
    {
        const nuevoMensaje = new MensajeModel(mensaje);
        await nuevoMensaje.save();
    }

    public static async obtenerMensajes(): Promise<MensajeType[]>
    {
        return await MensajeModel.find();
    }
}