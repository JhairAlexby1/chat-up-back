import ChatModel from "../models/chat.model";
import ChatType from "../types/chat.type";

export default class ChatService
{
    public static async crearChat(chat: ChatType): Promise<void>
    {
        const nuevoChat = new ChatModel(chat);
        await nuevoChat.save();
    }

    public static async obtenerChats(): Promise<ChatType[]>
    {
        return await ChatModel.find();
    }
}