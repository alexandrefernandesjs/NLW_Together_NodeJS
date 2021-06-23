import { Request, Response, NextFunction } from "express";

export function ensureAdmin(resquest: Request, response: Response, next: NextFunction) {
    const admin = true;
    
    if(admin) {
        return next();
    }

    // 401: Unauthorized
    return response.status(401).json({
        error: "Unauthorized user"
    });
}