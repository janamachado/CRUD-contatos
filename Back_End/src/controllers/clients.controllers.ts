import {Request, Response} from 'express'
import {instanceToPlain} from 'class-transformer'

import createClientService from '../services/client/createClient.services'
import deleteClientService from '../services/client/deleteClient.service'
import listClientService from "../services/client/listClient.service"
import updateClientService from '../services/client/updateClient.service'
import listOndeClientService from '../services/client/listOneClient.service'

import { IClient, IClientUpdate } from '../interfaces/users'
import { Client } from '../entities/client.entity'
import tokenDecoder from '../utils/tokenDecoder.utility'


const createClientController = async (request: Request, response: Response) => {
    const data: IClient = request.body

    const createdClient = await createClientService(data)
    return response.status(201).json(instanceToPlain(createdClient))
}

const listClientController = async (request: Request, response: Response) => {
    const allClients = await listClientService()
    return response.json(instanceToPlain(allClients))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

const listOneClientController = async (request: Request, response: Response)=>{
    const token = request.headers.authorization
    const id = tokenDecoder(token!).sub

    const client = await listOndeClientService(id)
    return response.status(200).json(instanceToPlain(client))
}

const updateClientController = async (request: Request, response: Response) => {
    const client: IClientUpdate = request.body 
    const id: string = request.params.id

    const updatedUser = await updateClientService(client, id)
    return  response.status(200).json({
        message: "User updated",
        updatedUser: instanceToPlain(updatedUser)})
}

const deleteClientController = async (request: Request, response: Response) =>{
    const id = request.params.id

    const deletedUser = await deleteClientService(id)
    if(deletedUser instanceof Client){
        return response.status(204).send({message: 'User deleted!'})
    } else {
        return response.status(deletedUser[1] as number).json({
            message: deletedUser[0]
        })
    }
}

export {createClientController, listClientController, listOneClientController, updateClientController, deleteClientController}