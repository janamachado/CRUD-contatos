import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"

const listOndeClientService = (id: any) =>{
    const clientRepository = AppDataSource.getRepository(Client)
    const client = clientRepository.findOne({
        where: {id: id}
    })

    if (!client) {
        throw new AppError("User not found.", 404);
      }

    return client
}

export default listOndeClientService