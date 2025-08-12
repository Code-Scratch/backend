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

        const user: User = {
            id: id,
            email: email,
            username: username,
            score: score
        };
        try {
            const log = await service.logUser(user);
            res.status(200).json({user: log})
        }
        catch(err){
            next(err);
        }
        

    })
};

export default UserController;