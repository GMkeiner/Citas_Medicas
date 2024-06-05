import { Delete } from "@nestjs/common";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    id:             number;

    @Column()
    nombre:         string;

    @Column()
    apellido:       string;

    @Column()
    identificacion: number;

    @Column()
    mensaje:        string;

    @Column()
    correo:         string;

    @Column()
    Telefono:       number;
    
    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @DeleteDateColumn({type: 'timestamp'})
    deleteAt: Date;


}
