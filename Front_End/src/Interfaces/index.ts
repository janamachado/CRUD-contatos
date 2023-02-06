export interface ISignInProps{
    email: string
    password: string
}

export interface IRegisterProps {
    firstname: string
    lastname: string
    email: string
    password: string
}

// ------------------------CLIENTES---------------------

export interface IClient {
    firstname: string
    lastname: string
    email: string
    password: string
    isActive: boolean
    contact: IContact
}

export interface IClientNoPassword {
    firstname: string
    lastname: string
    email: string
    password?: string
    isActive: boolean
}

export interface IClientRequest {
    firstname: string
    lastname: string
    email: string
    password: string
    isActive: boolean
    contact: IContact[]
}

export interface IClientLogin {
    email: string
    password: string
}

export interface IClientUpdate {
    firstname?: string
    lastname?: string
    email?: string
    password?: string
    id?: string
}

export interface IClientDelete {
    isActive: boolean
}

// ----------------------CONTATOS-------------------------

export interface IContact {
    id: string
    contact_name: string
    contact_email: string
    contact_phone: string
    clientId: string
    createdAt: Date
}

export interface IContactRequest {
    contact_name: string
    contact_email: string
    contact_phone: string
}

export interface IContactUpdate {
    id?: string
    contact_name?: string
    contact_email?: string
    contact_phone?: string
}