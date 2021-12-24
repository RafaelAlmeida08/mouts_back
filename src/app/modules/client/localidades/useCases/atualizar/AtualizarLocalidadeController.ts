import { Request, Response } from "express";
import { AtualizarLocalidadeService } from "./AtualizarLocalidadeService";

export class AtualizarLocalidadeController {
    async handle(request: Request, response: Response) {
        const { nome, categoria, endereco, cidade } = request.body;
        
        const id = request.params.id;

        const service = new AtualizarLocalidadeService();

        const localidade = await service.execute({nome, categoria, endereco, cidade}, id);

        return response.status(200).json(localidade);
    }
}
