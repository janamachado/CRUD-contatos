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
    contact_name: string
    contact_email: string
    contact_phone: string
    createdAt: Date
}

export interface IContactRequest {
    contact_name: string
    email: string
    contact_phone: string
    client: IClient
}

export interface IContactUpdate {
    contact_name?: string
    contact_email?: string
    contact_phone?: string
}
