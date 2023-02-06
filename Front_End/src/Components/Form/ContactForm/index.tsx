import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../../context/AuthContext";
import { IContactRequest } from "../../../Interfaces"
import { Button } from "../../Button/styles";
import { ContainerFormContact, FormContact } from "./styles";

const ContactForm = () =>{

    const {addContact,  contacts} = useContext(AuthContext)

    const {register, handleSubmit, formState: {errors}
    } = useForm<IContactRequest>({
    })

    return (
        <ContainerFormContact>
            <div className="div_titleContact">
                <p>Cadastrar novo</p>

            </div>
            <FormContact onSubmit={handleSubmit(addContact)}>

                <div className="div_label">
                    <label>Nome</label>
                    <input
                    type="text"
                    placeholder="Nome"
                    {...register('contact_name')}
                    />
                </div>

                <div className="div_label">
                    <label>Email</label>
                    <input
                    type="text"
                    placeholder="Email"
                    {...register('contact_email')}

                    />
                </div>
                <div className="div_label">
                    <label>Telefone</label>
                    <input
                    type="text"
                    placeholder="Telefone"
                    {...register('contact_phone')}
                    
                    />
                </div>
                <div className="div_button">
                    <Button type="submit">Cadastrar</Button>
                </div>
            </FormContact>
        </ContainerFormContact>
    )
}

export default ContactForm