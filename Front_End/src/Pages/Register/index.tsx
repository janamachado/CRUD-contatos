import { useNavigate } from "react-router-dom"

import RegisterForm from "../../Components/Form/RegisterForm"
import { Button } from "../../Components/Button/styles"

const Register = () =>{

    const navigate = useNavigate()

    const goLogin = () => {
        navigate('/Login', {replace: true})
    }

    return(
        <div>
            <RegisterForm/>
            <p>Já tenho cadastro - <Button onClick={goLogin}>Login</Button></p>
        </div>
    )
}

export default Register