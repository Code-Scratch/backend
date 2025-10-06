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
const UserService_1 = __importDefault(require("../service/UserService"));
const UserController = (router) => {
    const service = (0, UserService_1.default)();
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json("estas en el userController yeiiii");
    }));
    router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, email, username, score } = req.body;
        console.log(id + "" + "id desde el controller ");
        const user = {
            id: id,
            email: email,
            username: username,
            score: score
        };
        try {
            const log = yield service.logUser(user);
            console.log(user.id + "" + "id despues de llamar al service y al repo");
            res.status(200).json({ user: log });
        }
        catch (err) {
            next(err);
        }
    }));
    router.put('/update', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("llego al controller");
        const { id, pb } = req.body;
        try {
            const response = yield service.uptdatePb(id, pb);
            res.status(200).json({ user: response });
        }
        catch (error) {
            next(error);
        }
        ;
    }));
};
exports.default = UserController;
