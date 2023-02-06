import {createContext, ReactNode, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { API } from '../Services';

import { IClient, IContact, IContactRequest, IRegisterProps, ISignInProps } from '../Interfaces';
import { toast } from 'react-toastify';

export interface IContext {
    client: IClient
    signIn: (props: ISignInProps)=> void
    registerClient: (props: IRegisterProps)=> void
    addContact: (props: IContactRequest)=>void
    contacts: IContact[]
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
    setClient: React.Dispatch<React.SetStateAction<IClient>>
    token: any
    updateContact: (props: string) => void
}

export interface IClientProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider = ({children}: IClientProviderProps) =>{
    const [client, setClient] = useState<IClient>({} as IClient)
    const [contacts, setContacts] = useState<IContact[]>([])

    const navigate = useNavigate()
    const token = localStorage.getItem("@DSFFLLSTCK:token")

    useEffect(()=>{
        async function loadUser (){
            const token = localStorage.getItem('KenzieHub:token')

            if(token){
                try {
                    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
                    const {data} = await API.get('/client/profile')
                    console.log(data)
                    setClient(data)
                    setContacts(data.contact)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        loadUser()
    }, [])


    const registerClient = (data: IRegisterProps)=>{
        API.post('/client', data)
        .then((res) => {
            setClient(res.data)
            toast.success('Cadastro feito com sucesso! Faça o login.', { autoClose: 2000 })
            setTimeout(()=>{
                navigate('/Login', {replace: true})
            }, 1000)
        })
        .catch((err)=> toast.error('Algo deu errado! Confira todos os campos preenchidos', { autoClose: 2000 }))      
    }

    const signIn = async (data: ISignInProps) =>{
        try {
            const response = await API.post('/login', data)
            const {token} = response.data
            API.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem('@DSFFLLSTCK:token', token)
            toast.success('Login feito com sucesso!', { autoClose: 2000 })
            navigate('/Dashboard', {replace: true})
        } catch (error) {
            toast.error('Login e/ou senha inválidos')
        }
    }

    const addContact = (data: IContactRequest) =>{
        API.post('/contact', data)
        .then((res)=>{
            API.defaults.headers.common.Authorization = `Bearer ${token}`
            setContacts([...contacts, res.data])
            toast.success("Contato cadastrado com sucesso!", { autoClose: 2000 });
            console.log(contacts)
        })
        .catch((err)=>{
            toast.error("Não foi possível cadastrar o contato   ", { autoClose: 2000 });
            console.log("Esse é o erro:", err)
        })
    }

    const updateContact = (id: string) =>{
        API.patch(`/contact/${id}`)
        .then((res) =>{
            setContacts(res.data)
        })
        .catch((err) => console.log("Esse é o erro =>", err))
    }

    return (
        <AuthContext.Provider
            value={{
                registerClient,
                signIn,
                client,
                setClient,
                addContact,
                contacts,
                setContacts,
                token,
                updateContact,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider