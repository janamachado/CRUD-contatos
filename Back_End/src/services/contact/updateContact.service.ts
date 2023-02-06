import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"
import { IContactUpdate } from "../../interfaces/users"

const updateContactService = async ({contact_name, contact_phone, contact_email}: IContactUpdate, clientId: string, contactId: any): Promise<Contact> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const findedContact = await contactRepository.findOneBy({
        id: contactId
    })

    if(findedContact?.clientId !== clientId){
        throw new AppError("Unauthorized", 401)
    }

    if(!findedContact){
        throw new AppError('Contact not found', 404)
    }

    await contactRepository.update(
        contactId,
        {
            contact_name: contact_name ? contact_name : findedContact!.contact_name,
            contact_phone: contact_phone ? contact_phone : findedContact!.contact_phone,
            contact_email: contact_email ? contact_email : findedContact!.contact_email, 

        }
    )
    const updatedContact = await contactRepository.findOne({
       where: {id: contactId}
    })

    return updatedContact!
}

export default updateContactService