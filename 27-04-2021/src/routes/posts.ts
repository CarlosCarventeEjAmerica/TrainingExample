import express from 'express';



let postRouter = express.Router()


let data ={
    posts:[
        {id: '1', userid:'1', title: 'sunt au facere', body: 'quit et suscript'},
        {id: '2', userid:'1',title: 'sunt au facere', body: 'quit et suscript'},
        {id: '3', userid:'1',title: 'sunt au facere', body: 'quit et suscript'}
    ]
};
postRouter.get('/', (req, res) => {
    res.json(data.posts)
});

postRouter.post('/', (req, res) => {
    res.json('posting.....')
});
postRouter.patch('/', (req, res) => {
    res.json('patching...')
});
postRouter.delete('/', (req, res) => {
    res.json('deleting...')
});

export default postRouter;