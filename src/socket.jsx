import { io } from 'socket.io-client';

const soc = io('http://localhost:3001');

export const socket = soc;