import MensajeService from "../services/mensaje.service";

import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
    try{
        const mensajes = await MensajeService.obtenerMensajes();
        return res.status(200).json(mensajes);
    }
    catch(error: any){
        res.status(500).json({error: error.message});
    }
}

const create = async (req: Request, res: Response) => {
    try{
        await MensajeService.crearMensaje(req.body);
        return res.status(201).json({message: 'Mensaje creado correctamente'});
    }
    catch(error: any){
        res.status(500).json({error: error.message});
    }
}

export default {index, create};