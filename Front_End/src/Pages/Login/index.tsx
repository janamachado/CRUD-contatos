import { useNavigate } from "react-router-dom"

import LoginForm from "../../Components/Form/LoginForm"
import { Button } from "../../Components/Button/styles"

const Login = () =>{
   const navigate = useNavigate()

    const goRegister = () => {
        navigate('/Register', {replace: true})
    }

    return(
        <div>
            <LoginForm/>
            <p>Ainda não tem cadastro? <Button onClick={goRegister}>Cadastre-se</Button></p>
        </div>
        
    )
}

export default Login