"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos nuestras dependencias
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const process_1 = __importDefault(require("process"));
const UserRouting_1 = __importDefault(require("./roouting/UserRouting"));
const app = (0, express_1.default)();
const port = process_1.default.env.PORT;
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log(req.body);
    res.json('Hello world');
});
app.use('/user', UserRouting_1.default);
//app.use(errorHandler);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
