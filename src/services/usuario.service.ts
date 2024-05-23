import Usuario from '../models/usuario.model';
import UsuarioType from '../types/usuario.type';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {serialize} from "cookie";

export default class UsuarioService
{
    public static async crearUsuario(usuario: UsuarioType): Promise<void>
    {
        const nuevoUsuario = new Usuario(usuario);
        await nuevoUsuario.save();
    }

    public static async obtenerUsuarioPorEmail(email: string): Promise<UsuarioType | null>
    {
        return await Usuario.findOne({email});
    }

    public static async obtenerUsuarioPorId(id: string): Promise<UsuarioType | null>
    {
        return await Usuario.findById(id);
    }

    public static async obtenerUsuarios(): Promise<UsuarioType[]>
    {
        return await Usuario.find();
    }

    public static async login(email: string, password: string): Promise<string | null>
    {
        const usuario = await this.obtenerUsuarioPorEmail(email);
        if (!usuario) return null;

        const esPasswordCorrecto = await bcrypt.compare(password, usuario.password);
        if (!esPasswordCorrecto) return null;

        usuario.conectado = true;

        const token = jwt.sign({id: usuario._id}, process.env.JWT_SECRET as string, {expiresIn: '1d'});
        return serialize('token', token, {
            sameSite: 'none',
            maxAge: 60 * 60 * 1000,
            path: '/',
        });
    }
}

