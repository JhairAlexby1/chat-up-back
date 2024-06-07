import jwt from "jsonwebtoken";
import 'dotenv/config';

export const getToken = async (token: string) => {
    try {
        const {result}: any = jwt.verify(token, process.env.SECRET!);
        return result;
    } catch (error) {
        return error;
    }
}

export const verifyToken = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.cookies.token;
        if(!token) return res.status(401).json({message: 'No autorizado'});
        const result = await getToken(token);
        if(result === 'jwt expired') return res.status(401).json({message: 'Token expirado'});
        if(result === 'invalid token') return res.status(401).json({message: 'Token inválido'});
        next();
    } catch (error) {
        res.status(500).json({error});
    }
}

export const verifyTokenWs = async (token: string) => {
    try {
        return await getToken(token);
    } catch (error) {
        return error;
    }
}