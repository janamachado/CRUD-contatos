import {Route, Routes, Navigate} from 'react-router-dom'

import Register from '../Pages/Register'
import Login from '../Pages/Login'
import ClientBoard from '../Pages/ClientBoard'

const MainRoutes = () =>{
    return (
        <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Dashboard' element={<ClientBoard />} />
            <Route path='*' element={<Navigate replace to='/Register'/>} />
        </Routes>
    )
}

export default MainRoutes