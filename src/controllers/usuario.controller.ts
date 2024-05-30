import UsuarioService from "../services/usuario.service";

import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
    try{
        const usuarios = await UsuarioService.obtenerUsuarios();
        return res.status(200).json(usuarios);
    }
    catch(error: any){
        res.status(500).json({error: error.message});
    }
}
const indexConected = async (req: Request, res: Response) => {
    try{
        const usuarios = await UsuarioService.obtenerUsuariosConectados();
        return res.status(200).json(usuarios);
    }
    catch(error: any){
        res.status(500).json({error: error.message});
    }

}


const create = async (req: Request, res: Response) => {
  try {
    await UsuarioService.crearUsuario(req.body);
    return res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const token = await UsuarioService.login(req.body.email, req.body.password);

    if (!token)
      return res
        .status(401)
        .json({ message: "Usuario o contraseña incorrectos" });
    res.header("Set-Cookie", token);
    res.setHeader("Set-Cookie", token);
    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });
    res.status(200).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default {index, create, login, indexConected};

