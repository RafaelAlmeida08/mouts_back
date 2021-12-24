import { NextFunction, Request, Response } from "express";

export const ensureFields = (request: Request, response: Response, next: NextFunction) => {    
    const { nome, estado, pais } = request.body;

    if(!nome)
        return response.status(400).json({message: 'O campo nome é obrigatório!'});
    else if(!estado) 
        return response.status(400).json({message: 'O campo estado é obrigatório!'});
    else if(estado.length !== 2) 
        return response.status(400).json({message: 'O campo estado deve conter a sua sigla!'});
    else if(!pais) 
        return response.status(400).json({message: 'O campo país é obrigatório!'});
    else 
        return next();
}
