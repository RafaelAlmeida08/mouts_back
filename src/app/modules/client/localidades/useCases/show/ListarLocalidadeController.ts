import { Request, Response} from "express";
import { ListarLocalidadeService } from "./ListarLocalidadeService";

export class ListarLocalidadeController {
    async handle(request: Request, response: Response) {
        const { id  } = request.params;

        const service = new ListarLocalidadeService()

        const local = await service.execute(id);

        return response.status(200).json(local)
    }
}