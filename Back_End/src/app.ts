import "reflect-metadata"
import express from "express"
import clientRoutes from "./routes/client.routes";
import sessionRoutes from "./routes/session.routes";
import contactRoutes from "./routes/contact.routes";
var cors = require('cors')



const app = express()
app.use(cors())
app.use(express.json())

app.use('/client', clientRoutes)
app.use('/login', sessionRoutes)
app.use('/contact', contactRoutes)


export default app
