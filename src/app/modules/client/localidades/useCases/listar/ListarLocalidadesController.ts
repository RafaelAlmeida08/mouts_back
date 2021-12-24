import { Request, Response } from "express";
import { ListarLocalidadesService } from "./ListarLocalidadesService";

export class ListarLocalidadesController {
    async handle(request: Request, response: Response) {        
        const service = new ListarLocalidadesService();

        const list = await service.execute();

        return response.status(200).json(list);
    }
}
