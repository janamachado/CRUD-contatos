import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity("contact")
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    readonly id: number

    @Column()
    contact_name: string

    @Column()
    contact_email: string

    @Column()
    contact_phone: string

    @Column()
    clientId: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Client, (client) => client.id)
    @JoinColumn()
    client: Client
}