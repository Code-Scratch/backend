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
            return existUser.data();

        }
        catch (error){
            throw new AppError('No se pudo entrar a la base', 500);
            
        }
        

    };

    const uptdatePb = async(id: string, pb: number) => {
        const user = await repository.findById(id);

        if(!user){
            throw new AppError('El usuario no existe', 404);
        }

        try {
            const userData = user.data() as User;

            const userUpdated: User = {
                ...userData,
                id,
                score: pb   
            };

            return await repository.update(userUpdated)

        }
        catch (error){
            throw new AppError('No se pudo actualizar el PB', 500)
        }
    }
    
    return {
        logUser,
        uptdatePb
    }

};

export default UserService;