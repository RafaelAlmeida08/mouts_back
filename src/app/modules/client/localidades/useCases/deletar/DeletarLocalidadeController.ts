import { Request, Response } from "express";
import { DeletarLocalidadeService } from "./DeletarLocalidadeService";

export class DeletarLocalidadeController {
    async handle(request: Request, response: Response) {
        const service = new DeletarLocalidadeService();

        await service.execute(request.params.id);

        return response.status(200).json({message: 'Localidade Removida com sucesso!'});
    }
}
