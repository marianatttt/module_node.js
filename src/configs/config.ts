import { config } from "dotenv";

config();

export const configs ={
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,

    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'aaa' ,
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'bbb',
}