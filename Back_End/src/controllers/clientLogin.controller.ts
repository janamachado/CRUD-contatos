import {Request, Response} from 'express'
import { IClientLogin } from "../interfaces/users"
import clientLoginService from "../services/sessions/clientLogin.service"

const userLoginController = async (request: Request, response: Response) => {
    
    const dataLogin: IClientLogin = request.body
    const token = await clientLoginService(dataLogin)
    return response.json({token})
}

export default userLoginController