import express from 'express';



let userRouter = express.Router()

let data ={
    users:[
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address:{city:'Gwenborough',phone:'1-770-736-8031', company:{name:'Romaguera-Crona'}}},
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address:{city:'Gwenborough',phone:'1-770-736-8031', company:{name:'Romaguera-Crona'}}},
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address:{city:'Gwenborough',phone:'1-770-736-8031', company:{name:'Romaguera-Crona'}}},

    ]
};

userRouter.get('/', (req, res) => {
    res.json(data.users);
});

export default userRouter;