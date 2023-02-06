import 'dotenv/config'
import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'
import { AppError } from '../errors/appError'


const verifyAuthTokenMiddleware = (request: Request, response: Response, next: NextFunction) =>{
    let token = request.headers.authorization

    if(!token){
        throw new AppError("missing authorization token.");
    }

    token = token.split(" ")[1]
    
    jwt.verify(token,
        process.env.SECRET_KEY as string,
        (error, decoded: any) => {

        if(error){
            return response.status(403).json({
                message: "Invalid token"
            })
        }
        if(decoded){
            request.body.client = {
                isActive: decoded.isActive,
                id: decoded.sub
            }
        }
        return next()
    })
}

export default verifyAuthTokenMiddleware