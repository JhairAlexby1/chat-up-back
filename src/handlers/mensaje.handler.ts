import {WebSocketServer} from "ws";
import MensajeService from "../services/mensaje.service";
import {MensajeInputType} from "../types/mensaje.type";

const wss = new WebSocketServer({port: 3030}, () => {console.log("WebSocketServer started")});

wss.on("connection", (ws) => {
    ws.on("message", async (message: MensajeInputType) => {
        console.log(`Received message => ${message}`);
        await MensajeService.crearMensaje({texto: message.texto, usuario: message.usuario, chat: message.chat})

        ws.send(JSON.stringify({event: "message send", data: message}));
    });

    ws.on("listening", (id: string) => {
        const mensajes = MensajeService.obtenerMensajes(id);
        ws.send(JSON.stringify({event: "messages", data: mensajes}));
    });
});