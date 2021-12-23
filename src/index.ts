import 'reflect-metadata';
import { server } from './config/server';
import './infrastructure/database';
import { routes } from './routes';

server.use('/', routes)
server.listen( process.env.PORT || 5000 , () => console.log('Server is running on port 5000'));



