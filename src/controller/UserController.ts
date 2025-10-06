import { Router } from "express";
import { User } from "../model/User";
import UserService from "../service/UserService";

const UserController = (router: Router) => {
    const service = UserService();

    router.get('/', async(req, res) => {
        res.json("estas en el userController yeiiii")
    })

    router.post('/', async(req, res, next) => {
        const {id, email, username, score} = req.body

        console.log(id + "" + "id desde el controller ");
        

        const user: User = {
            id: id,
            email: email,
            username: username,
            score: score
        };
        try {
            const log = await service.logUser(user);
            console.log(user.id + "" + "id despues de llamar al service y al repo");
            
            res.status(200).json({user: log})
        }
        catch(err){
            next(err);
        }
        

    })

    router.put('/update', async(req, res, next) => {
        console.log("llego al controller");
        
        const {id, pb} = req.body
        try{
            const response = await service.uptdatePb(id,pb);
            res.status(200).json({user : response});
        }
        catch (error){
            next(error);
        };

    });
};

export default UserController;