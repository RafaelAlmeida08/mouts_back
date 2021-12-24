import { NextFunction, Request, Response } from "express";

export const ensureFields = (request: Request, response: Response, next: NextFunction) => {   
    const { descricao, localidade } = request.body;

    if(!descricao)
        return response.status(400).json({message: 'Digite uma descrição para a nota'});
    else if(!localidade) 
        return response.status(400).json({message: 'O ID da localidade é obrigatório!'});
    else
        return next();
}
