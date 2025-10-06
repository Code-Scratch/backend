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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../middlewares/AppError"));
const FireBaseRepository_1 = require("../repository/FireBaseRepository");
const UserService = () => {
    const repository = new FireBaseRepository_1.fireBaseRespository();
    const logUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const existUser = yield repository.findById(usuario.id);
            if (existUser == null) {
                usuario.score = 0;
                const registUser = yield repository.save(usuario);
                return registUser;
            }
            ;
            console.log("esto tiene el existUser del UserService" + "" + existUser);
            return existUser.data();
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.default('No se pudo entrar a la base', 500);
        }
    });
    const uptdatePb = (id, pb) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(id + "id del usuario" + "" + "y pb del usuario es:" + pb);
        const user = yield repository.findById(id);
        console.log((user === null || user === void 0 ? void 0 : user.data) + "desde el service");
        if (!user) {
            throw new AppError_1.default('El usuario no existe', 404);
        }
        try {
            const userData = user.data();
            const userUpdated = Object.assign(Object.assign({}, userData), { id, score: pb });
            return yield repository.update(userUpdated);
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.default('No se pudo actualizar el PB', 500);
        }
    });
    return {
        logUser,
        uptdatePb
    };
};
exports.default = UserService;
