import {hash} from 'bcrypt'

import { IClient } from "../../interfaces/users"
import { Client } from "../../entities/client.entity"
import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Contact } from "../../entities/contact.entity"

const createClientService = async ({firstname, lastname, email, isActive, password, contact}: IClient) => {
    const clientRepository = AppDataSource.getRepository(Client)
    const clientExists = await clientRepository.findOne({
        where: {email: email}
    })

    if (clientExists) {
        throw new AppError("This e-mail is already being used.", 400);
    }

    if(!password){
        throw new AppError('Password is missing')
    }
    const contactRepository = AppDataSource.getRepository(Contact)

    const hashedPassword = await hash(password, 10)
    
    const newClient = new Client()
    newClient.firstname = firstname,
    newClient.lastname = lastname,
    newClient.email = email,
    newClient.password = hashedPassword
    newClient.isActive = isActive,
    newClient.contact = []

    clientRepository.create(newClient)
    await clientRepository.save(newClient)

    return newClient
}

export default createClientService