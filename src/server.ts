import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import { router } from "./routes";
import "./database";
import cors from "cors";

// @types/express
const app = express();
app.use(express.json());
app.use(router);
app.use(cors());

// Tratando erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log('Server is running at port 3000!'));