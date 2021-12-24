"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cidadesRoutes = void 0;
const express_1 = require("express");
const Controller_1 = __importDefault(require("../useCases/criar/Controller"));
const cidadesRoutes = (0, express_1.Router)();
exports.cidadesRoutes = cidadesRoutes;
cidadesRoutes.post('', new Controller_1.default().handle);
