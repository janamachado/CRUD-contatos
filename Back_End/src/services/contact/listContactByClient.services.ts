import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"

const listContactByClientService = async (client_id: any) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const allContacts = contactRepository.find({
        where: {clientId: client_id}
    })

    return allContacts
}

export default listContactByClientService