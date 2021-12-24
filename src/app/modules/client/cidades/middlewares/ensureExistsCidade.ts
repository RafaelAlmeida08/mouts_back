import { NextFunction, Request, Response } from "express";
import { EnsureExistsCidadeService } from "../services/EnsureExistsCidadeService";

export const ensureExistsCidade = async (request: Request, response: Response, next: NextFunction) => {
    
    const service = new EnsureExistsCidadeService();

    const cidade = await service.execute(request.body.cidade);

    if(!cidade)
        return response.status(404).json({messagem: 'Cidade não encontrada!'});
    else
        next();
}
