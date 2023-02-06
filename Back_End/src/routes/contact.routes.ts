import {Router} from 'express'
import { createContactController, deleteContactController, listContactByClientController, listContactController, updateContactController } from '../controllers/contact.controller'

import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware'


const contactRoutes = Router()

contactRoutes.post('', verifyAuthTokenMiddleware, createContactController)

contactRoutes.get('', verifyAuthTokenMiddleware, listContactController)

contactRoutes.patch('/:id', verifyAuthTokenMiddleware, updateContactController)

contactRoutes.delete('/:id', verifyAuthTokenMiddleware, deleteContactController)

contactRoutes.get('/:id', verifyAuthTokenMiddleware, listContactByClientController)


export default contactRoutes