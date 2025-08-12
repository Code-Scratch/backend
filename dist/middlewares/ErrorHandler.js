"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const errorHandler = (err, req, res, next) => {
    console.error(err.stack || err);
    res.status(err.status || 500).json({
        error: err.message || 'Error interno del servidor'
    });
};
exports.default = errorHandler;
