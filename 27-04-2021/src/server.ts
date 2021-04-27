import express from 'express';
import postRouter from '../src/routes/posts'
import userRouter from '../src/routes/users'
const server = express();
const port = 3000;


/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//register routes

server.use('/post', postRouter);

server.use('/post', userRouter);

server.get('/', (req, res) => {
    res.send('Greetings');
});




server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});