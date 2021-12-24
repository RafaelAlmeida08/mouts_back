import { Request, Response } from "express";
import { CriarNotaService } from "./CriarNotaService";

export class CriarNotaController {
    async handle(request: Request, response: Response) {        
        const { descricao, localidade } = request.body;

        const service = new CriarNotaService();

        const nota = await service.execute({descricao, localidade});

        return response.status(201).json(nota);
    }
}
