import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Exclude} from 'class-transformer';

import { Contact } from "./contact.entity";

@Entity("client")
export class Client {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({unique: true})
    email: string

    @Column()
    @Exclude()
    password: string
    
    @Column({default: true})
    isActive: boolean

    @OneToMany(() => Contact, (contact) => contact.client, { eager: true })
    contact: Contact[]
}