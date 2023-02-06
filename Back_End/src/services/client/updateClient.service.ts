
import { hash } from "bcrypt"
import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { IClientUpdate } from "../../interfaces/users"

const updateClientService = async (client: IClientUpdate, id: string): Promise<Client> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const clientKeys = Object.keys(client)

    if(clientKeys.includes('id')){
        throw new AppError("Is not able to update id", 401)
    }

    const findedClient = await clientRepository.findOneBy({
       id
    })

    if(!findedClient){
        throw new AppError('User not found', 404)
    }

    const {firstname, lastname, email, password} = client
    await clientRepository.update(
        id,
        {
            firstname: firstname ? firstname : findedClient.firstname,
            lastname: lastname ? lastname : findedClient.lastname,
            email: email ? email : findedClient.email, 
            password: password ? await hash(password, 10) : findedClient.password
        }
    )
    const updatedClient = await clientRepository.findOneBy({
        id
    })

    return updatedClient!
}

export default updateClientService