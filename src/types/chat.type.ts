import MensajeType from "./mensaje.type";

export default interface ChatType
{
  _id: number;
  usuario: string;
  mensajes: MensajeType[];
}
