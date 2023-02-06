import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../../context/AuthContext";
import { ISignInProps } from "../../../Interfaces"
import { Button } from "../../Button/styles";
import { ContainerForm, Form } from "../ContactForm/styles";

const LoginForm = () =>{

    const {signIn} = useContext(AuthContext)


    const {register, handleSubmit} = useForm<ISignInProps>({})

    return (
        <ContainerForm>
            <Form onSubmit={handleSubmit(signIn)}>
                <div>
                    <p>Faça Login para começar</p>
                </div>

                <label>Email</label>
                <input
                type="text"
                placeholder="Email"
                {...register('email')}
                />

                <label>Senha</label>
                <input
                type="password"
                placeholder="Senha"
                {...register('password')}
                />
                <Button type="submit">Entrar</Button>
            </Form>
        </ContainerForm>

    )
}

export default LoginForm