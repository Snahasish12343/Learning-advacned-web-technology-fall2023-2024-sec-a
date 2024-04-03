import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ecredit")
export class Ecredit{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    emname: string;

    @Column({nullable:false})
    currentcredit: number;
    


}