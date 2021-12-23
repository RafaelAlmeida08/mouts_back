import express from 'express'
import cors from 'cors';

const server = express();

const corsOptions: cors.CorsOptions = {
    methods: "GET,POST, PUT, DELETE",
    origin: "*"
};

server.use(express.json());
server.use(cors(corsOptions));

export { server }
