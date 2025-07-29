import { Request, Response, NextFunction } from "express";
import z from "zod";

export function ValidateBody<T>(schema:z.ZodSchema<T>) {
    return (request: Request, response: Response, next: NextFunction) => {
        const valid = schema.safeParse(request.body);
        if (valid.error) {
            response.status(400).json({errors:z.treeifyError(valid.error)});
            return;
        }
        next();
    };
}

export function ValidateParams<T>(schema:z.ZodSchema<T>) {
    return (request: Request, response: Response, next: NextFunction) => {
        const valid = schema.safeParse(request.body);
        if (valid.error) {
            response.status(400).json({errors:z.treeifyError(valid.error)});
            return;
        }
        next();
    };
}