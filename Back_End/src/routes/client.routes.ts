import {Router} from 'express'

import {createClientController, listClientController, deleteClientController, updateClientController, listOneClientController} from "../controllers/clients.controllers"
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware'


const clientRoutes = Router()

clientRoutes.post('', createClientController)

clientRoutes.get('', verifyAuthTokenMiddleware, listClientController)

clientRoutes.patch('/:id', verifyAuthTokenMiddleware, updateClientController)

clientRoutes.delete('/:id', verifyAuthTokenMiddleware, deleteClientController)

clientRoutes.get("/profile", verifyAuthTokenMiddleware, listOneClientController)

export default clientRoutes