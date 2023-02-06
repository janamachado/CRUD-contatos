import { IContact } from "../../interfaces/users"
import { Client } from "../../entities/client.entity"
import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"

const createContactService = async ({contact_name, contact_phone, contact_email}: IContact, id: any) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contactExists = await contactRepository.findOneBy({
        contact_email
    })
    
    const newContact = new Contact()
    newContact.contact_name = contact_name,
    newContact.contact_phone = contact_phone,
    newContact.contact_email = contact_email,
    newContact.clientId = id,
    
    contactRepository.create(newContact)
    await contactRepository.save(newContact)

    return newContact
}

export default createContactService