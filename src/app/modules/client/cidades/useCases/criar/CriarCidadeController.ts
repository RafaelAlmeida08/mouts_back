import { Request, Response } from "express";
import Service from "./CriarCidadeService";

export default class CriarCidadeController {
    async handle(request: Request, response: Response) {
        const { nome, estado, pais } = request.body;

        const service = new Service();
        
        const cidade = await service.execute({nome, estado, pais});

        return response.status(201).json(cidade);
    }
}
