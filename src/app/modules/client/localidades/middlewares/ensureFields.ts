import { NextFunction, Request, Response } from "express";

export const ensureFields = (request: Request, response: Response, next: NextFunction) => {    
    
    const { nome, categoria, endereco, cidade } = request.body;

    if(!nome)
        return response.status(400).json({message: 'O nome da localidade é obrigatório!'});
    else if(!categoria) 
        return response.status(400).json({message: 'O campo categoria é obrigatório!'});
        else if (categoria < 1 || categoria > 3)
            return response.status(400).json({message: 'Selecione um categoria de localidade do 1 ao 3!'});
    else if(!endereco) 
        return response.status(400).json({message: 'O campo endereço é obrigatório!'});
    else if(!cidade) 
        return response.status(400).json({message: 'O campo cidade é obrigatório!'});
    else 
        return next();
}
