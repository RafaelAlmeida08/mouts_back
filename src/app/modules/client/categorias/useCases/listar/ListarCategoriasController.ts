import { Response, Request } from "express";
import { ListarCategoriasService } from "./ListarCategoriasService";

export class ListarCategoriasController {
    async handle(request: Request, response: Response) {
        const service = new ListarCategoriasService();

        const list = await service.execute();

        return response.status(200).json(list);
    }
}
