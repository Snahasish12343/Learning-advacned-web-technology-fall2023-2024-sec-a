import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subsupadmin")
export class Subsupadmin{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    size: string;

    @Column({nullable:false})
    ers: string;

    @Column({nullable:false})
    ere: string;
    


}