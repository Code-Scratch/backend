import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../fireBaseConfig/Config"
import { User } from "../model/User";
import AppError from "../middlewares/AppError";

export class fireBaseRespository {
    private userCollection = collection(db, 'users');

    async findById(id: string){
        const ref = doc(this.userCollection, id); 
        const snap = await getDoc(ref);

        if(!snap.exists()) {
            //throw new AppError("El usuario no existe", 404);
            return null;
        };
        return snap;
    };

    async save(usuario: User) : Promise<User>{
        const ref = doc(this.userCollection, usuario.id);  
        await setDoc(ref, usuario);
        return usuario;
    };
 
     
};