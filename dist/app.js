"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//the colon syntax helps to ensure type checking
var app = express_1.default();
// for this add variable, we're saying that our params should be number types as well as the return type
var add = function (a, b) {
    return a + b;
};
app.get('/', function (req, res, next) {
    console.log(add(5, 5));
    res.send('Hello');
});
app.listen(5000, function () {
    console.log('Server Running');
});
