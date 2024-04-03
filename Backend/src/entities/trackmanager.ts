import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trackmanager")
export class Trackmanager{
    @PrimaryGeneratedColumn()
    mid:number;

    @Column({nullable:false})
    title: string;

    @Column({nullable:false})
    due_date: string;

    @Column({nullable:false})
    id:number;

    @Column({nullable:false})
    status: string;

    @Column({nullable:false})
    dos: string;
}