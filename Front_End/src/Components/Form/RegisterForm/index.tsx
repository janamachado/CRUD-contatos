import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../../context/AuthContext";
import { IRegisterProps } from "../../../Interfaces"
import { Button } from "../../Button/styles";
import { ContainerForm, Form } from "../ContactForm/styles";

const RegisterForm = ()=>{

    const {registerClient} = useContext(AuthContext)

    const {register, handleSubmit} = useForm<IRegisterProps>({})

    return (
        <ContainerForm>
            <Form onSubmit={handleSubmit(registerClient)}>
                <div>
                    <p>Cadastre-se para começar sua agenda de contatos!</p>
                </div>

                <label>Nome</label>
                <input
                type="text"
                placeholder="Nome"
                {...register('firstname')}
                />

                <label>Sobrenome</label>
                <input 
                type="text"
                placeholder="Sobrenome"
                {...register('lastname')}
                />

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
                <Button type="submit">Cadastrar</Button>
            </Form>
        </ContainerForm>
    )
}

export default RegisterForm