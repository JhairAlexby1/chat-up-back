import {WebSocketServer} from "ws";
import MensajeService from "../services/mensaje.service";


const wss = new WebSocketServer({port: 3030}, () => {console.log("WebSocketServer started")});

wss.on("connection", (ws) => {
    ws.on("message", async (message: any) => {
        console.log(`Received message => ${message}`);
        await MensajeService.crearMensaje({texto: message.texto, usuario: message.usuario, chat: message.chat})
        if (message.event === "message")
        ws.send(JSON.stringify({event: "message send", data: message}));
        if (message.event === "listening")
        {
            const mensajes = await MensajeService.obtenerMensajes(message.data);
            ws.send(JSON.stringify({event: "messages", data: mensajes}));
        }
    });
});