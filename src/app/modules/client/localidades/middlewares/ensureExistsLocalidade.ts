import { NextFunction, Request, Response } from "express";
import { EnsureExistsLocalidadeService } from "../services/EnsureExistsLocalidadeService";

export const ensureExistsLocalidade = async (request: Request, response: Response, next: NextFunction) => {    
    const service = new EnsureExistsLocalidadeService();

    const localidade = await service.execute(request.params.id);

    if(!localidade)
        return response.status(404).json({messagem: 'Localidade não encontrada!'});
    else
        next();
}
