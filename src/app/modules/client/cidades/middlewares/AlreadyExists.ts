import { NextFunction, Request, Response } from "express";
import { AlreadyExistsService } from "../services/AlreadyExistsService";

export const alreadyExists = async (request: Request, response: Response, next: NextFunction) => {    
    const { nome } = request.body;

    const service = new AlreadyExistsService()

    const cidade = await service.execute(nome);

    if(cidade) 
        return response.status(400).json({message: 'Cidade já cadastrada!'});
    else 
        return next();
}
