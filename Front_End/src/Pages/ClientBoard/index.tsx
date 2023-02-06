import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, ContainerList, List } from "../../Components/List/styles";
import ContactForm from "../../Components/Form/ContactForm"
import { Button } from "../../Components/Button/styles";
import { AuthContext } from "../../context/AuthContext"
import { API } from "../../Services"
import Login from "../Login";

const ClientBoard = () =>{
    const {contacts, setContacts, client, setClient, token, updateContact} = useContext(AuthContext)

    const navigate = useNavigate()

    const getAllContacts = () =>{
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
        API.get(`/client/profile`)
        .then((res)=>{
            setContacts(res.data.contact)
        })
        .catch((err)=> console.log("Esse é o erro=>", err))
    }

    const getInfoUser = () =>{
        API.get("/client/profile")
        .then((res)=> setClient(res.data))
        .catch((err)=>console.log(err))
    }

    const goBack = ()=>{
        localStorage.clear()
        localStorage.clear()
        navigate('/Login', {replace: true})
     }

    useEffect(()=>{
        getAllContacts()
        getInfoUser()
    }, [])

    const deleteContact = (id: any) =>{
        API.delete(`/contact/${id}`)
        .then(()=>{
            getAllContacts()
            toast.info('Contato removido da sua lista', {autoClose: 1000})
        })
        .catch((err)=>{
            console.log("Esse é o erro =>", err)
            toast.error('Ocorreu algum erro ao remover seu contato da lista', {autoClose: 1000})
        })
    }

    return (
        <Container>
            {client.firstname ?
            <>
            <header>
                <p> {client.email} </p>
                <p>Olá, {client.firstname!} {client.lastname} ! </p>
                <Button onClick={goBack}>Sair</Button>
            </header>
            <div className="div_title">
                <p className="title_paragraph">Contatos de {client.firstname} </p>
            </div>
            <div>
                <ContactForm/>
            </div>
            {contacts.length > 0 ?
                <ContainerList>
                    {contacts.map((item, index)=>(
                        <List
                        key={index}>
                            <strong> {item.contact_name} </strong>
                            <div className="div_li">
                                <p> {item.contact_email} </p>
                                <p> {item.contact_phone} </p>
                            </div>
                            <button onClick={()=>updateContact(item.id)}>Editar Contato</button>
                            <button onClick={()=>deleteContact(item.id)}>Excluir</button>
                        </List>
                    ))}
                </ContainerList>
            :
                <h3>Você ainda não tem contatos cadastrados</h3>
            }
            </>
            :
            <Login/>
            }
        </Container>
    )
}

export default ClientBoard