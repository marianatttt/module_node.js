"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = require("./routers");
const configs_1 = require("./configs");
const routers_2 = require("./routers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/users", routers_1.userRouter);
app.use("/auth", routers_2.authRouter);
app.use((err, req, res, next) => {
    const status = err.status || 500;
    return res.status(status).json({
        message: err.message,
        status,
    });
});
app.listen(configs_1.configs.PORT, async () => {
    await mongoose_1.default.connect(configs_1.configs.DB_URL);
    console.log(`start${configs_1.configs.PORT}`);
});
