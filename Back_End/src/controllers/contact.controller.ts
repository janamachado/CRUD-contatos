import {Request, Response} from 'express'
import {instanceToPlain} from 'class-transformer'

import listContactByClientService from '../services/contact/listContactByClient.services'
import createContactService from '../services/contact/createContact.services'
import updateContactService from '../services/contact/updateContact.service'
import listContactService from '../services/contact/listContact.service'
import deleteContactService from '../services/contact/deleteContact.service'
import { IContact, IContactUpdate } from '../interfaces/users'
import tokenDecoder from '../utils/tokenDecoder.utility'

const createContactController = async (request: Request, response: Response) => {
    const contact: IContact = request.body
    const token = request.headers.authorization!

    const id = tokenDecoder(token)

    const newContact = await createContactService(contact, id.sub)

    return response.status(201).json(newContact)
}

const listContactController = async (request: Request, response: Response) => {

    const allContacts = await listContactService()
    return response.json(instanceToPlain(allContacts))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

const listContactByClientController = async (request: Request, response: Response) =>{
    const token = request.headers.authorization!
    const id = tokenDecoder(token)
    const client_id = id.sub

    const contactByClient = await listContactByClientService(client_id)
    return response.json(contactByClient)
}

const updateContactController = async (request: Request, response: Response) => {
    const contact: IContactUpdate = request.body 

    const token = request.headers.authorization!
    const {id: contactId} = request.params
    const id = tokenDecoder(token)
    const client_id = id.sub

    const updatedClient = await updateContactService(contact, client_id, contactId)
        return  response.status(200).json({
        message: "Contact updated",
        updatedContact: instanceToPlain(updatedClient)})
}

const deleteContactController = async (request: Request, response: Response) =>{
    const id = request.params.id

    const deletedUser = await deleteContactService(id)

    return response.status(204).json({message: "Contact Deleted!"})
}

export {createContactController, listContactController, listContactByClientController, updateContactController, deleteContactController}