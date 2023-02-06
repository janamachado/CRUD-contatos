import {Router} from 'express'
import sessionLoginController from '../controllers/clientLogin.controller'

const sessionRoutes = Router()

sessionRoutes.post('', sessionLoginController)

export default sessionRoutes