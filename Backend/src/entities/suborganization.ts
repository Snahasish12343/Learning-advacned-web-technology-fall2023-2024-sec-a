import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suborganization")
export class Suborg{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    totalemployeeneed: number;

    @Column({nullable:false})
    role: string;


}