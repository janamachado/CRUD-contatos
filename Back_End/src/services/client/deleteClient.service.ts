import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"


const deleteClientService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(Client)

    const findedUser = await userRepository.findOneBy({
        id
    })

    if(!findedUser){
        return ['User not found', 404]
    }
    if(findedUser.isActive === false){

        throw new AppError('User already inactive')
    }
    await userRepository.update(id, {
        isActive: false
    })
    return findedUser

}

export default deleteClientService