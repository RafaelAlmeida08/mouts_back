import { NextFunction, Request, Response } from "express";

export const ensureFields = (request: Request, response: Response, next: NextFunction) => {    
    
    const { nome, tipo, endereco, cidade } = request.body;

    if(!nome)
        return response.status(400).json({message: 'O nome da localidade é obrigatório!'});
    else if(!tipo) 
        return response.status(400).json({message: 'O campo tipo é obrigatório!'});
        else if (tipo < 1 || tipo > 3)
            return response.status(400).json({message: 'Selecione um tipo de localidade do 1 ao 3!'});
    else if(!endereco) 
        return response.status(400).json({message: 'O campo endereço é obrigatório!'});
    else if(!cidade) 
        return response.status(400).json({message: 'O campo cidade é obrigatório!'});
    else 
        return next();
}
