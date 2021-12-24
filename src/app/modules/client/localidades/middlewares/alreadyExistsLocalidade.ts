import { NextFunction, Request, Response } from "express";
import { AlreadyExistsLocalidadeService } from "../services/AlreadyExistsLocalidadeService";

export const alreadyExistsLocalidade = async (request: Request, response: Response, next: NextFunction) => {    
    const service = new AlreadyExistsLocalidadeService();

    const localidade = await service.execute(request.body.nome);

    if(localidade)
        return response.status(400).json({message: 'Localidade já existe!'});
    else
        next();
}
