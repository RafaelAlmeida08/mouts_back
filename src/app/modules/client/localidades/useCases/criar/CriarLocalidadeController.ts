import { Request, Response } from "express";
import { CriarLocalidadeService } from "./CriarLocalidadeService";

export default class CriarLocalidadeController {    
    async handle(request: Request, response: Response) {        
        const { nome, categoria, endereco, cidade } = request.body;   

        const service = new CriarLocalidadeService();

        const localidade = await service.execute({nome, categoria, endereco, cidade});

        return response.status(201).json(localidade);
    }
}
