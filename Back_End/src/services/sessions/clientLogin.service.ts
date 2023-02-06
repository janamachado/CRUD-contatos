import jwt from 'jsonwebtoken'
import {compare} from 'bcrypt'

import { IClientLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const clientLoginService = async ({email, password}: IClientLogin) => {

    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({
        email: email
    })

    if(!client){
        throw new AppError("Invalid email or password", 403)
    }

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch){
        throw new AppError("Invalid email or password", 403)
    }

    const token = jwt.sign({
        isActive: client.isActive
    },
    process.env.SECRET_KEY as string,
    {
        expiresIn: '24h',
        subject: client.id
    })

    return token
}

export default clientLoginService