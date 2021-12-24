import { Request, Response } from "express";
import Service from "./ListarCidadesService";

export default class ListarCidadesController {  
    async handle(request: Request, response: Response) {
        const service = new Service()

        const list = await service.execute();

        return response.status(200).json(list);
    }
}
