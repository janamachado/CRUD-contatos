import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"

const deleteContactService = async (id: any) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const findedContact = await contactRepository.findOne({
        where:{id}
    })

    if(!findedContact){
        throw new AppError("Contact not found", 404)
    }

    await contactRepository.delete({id})
    return {statusCode: 204, message: "Contact deleted"}
}

export default deleteContactService