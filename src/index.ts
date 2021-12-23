import 'reflect-metadata';
import { server } from './config/server';
import './infrastructure/database';

server.listen( 5000 , () => console.log('Server is running on port 5000'));



