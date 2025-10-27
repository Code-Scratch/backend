"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireBaseRespository = void 0;
const firestore_1 = require("firebase/firestore");
const Config_1 = require("../fireBaseConfig/Config");
class fireBaseRespository {
    constructor() {
        this.userCollection = (0, firestore_1.collection)(Config_1.db, 'users');
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = (0, firestore_1.doc)(this.userCollection, id);
            const snap = yield (0, firestore_1.getDoc)(ref);
            if (!snap.exists()) {
                //throw new AppError("El usuario no existe", 404);
                return null;
            }
            ;
            return snap;
        });
    }
    ;
    save(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = (0, firestore_1.doc)(this.userCollection, usuario.id);
            yield (0, firestore_1.setDoc)(ref, usuario);
            return usuario;
        });
    }
    ;
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(user + "desde el repo");
            const ref = (0, firestore_1.doc)(this.userCollection, user.id);
            yield (0, firestore_1.updateDoc)(ref, { score: user.score });
            return user;
        });
    }
}
exports.fireBaseRespository = fireBaseRespository;
;
