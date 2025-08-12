import AppError from "../middlewares/AppError";
import { User } from "../model/User";
import { fireBaseRespository } from "../repository/FireBaseRepository";

const UserService = () => {
    const repository = new fireBaseRespository();

    const logUser = async(usuario: User) =>{
        try {
            const existUser = await repository.findById(usuario.id);
                if(existUser == null){
                    usuario.score = 0;
                    const registUser = await repository.save(usuario);
                return registUser;
        };

            console.log("esto tiene el existUser del UserService" + "" + existUser);
            
            return existUser.data();

        }
        catch (error){
            console.log(error);
            throw new AppError('No se pudo entrar a la base', 500);
            
        }
        

    };
    
    return {
        logUser
    }

};

export default UserService;