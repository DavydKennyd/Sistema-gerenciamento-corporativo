import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    
    @PrimaryGeneratedColumn()
    idClient: number;
    
    @Column({ length: 150 })
    username:string;

    // @Column({ length: 50 })
    // email: string;

    @Column({ length: 255 })
    password: string;
}