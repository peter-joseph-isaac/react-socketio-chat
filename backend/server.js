const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const server = require('http').createServer(app);

const io = socketIO(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true
    }
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hey there!');
});

app.post('/post', (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const id = uuidv4();

    io.emit('message', { id: id, name: name, message: message});

    res.status(200).end();
});

io.on('connection', (socket) => {
    console.log('New User Connected!');
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});

server.listen(port, () => {
    console.log("Server is running!");
});