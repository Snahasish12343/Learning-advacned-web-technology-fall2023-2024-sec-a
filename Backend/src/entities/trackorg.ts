import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trackorg")
export class Trackorg{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    title: string;

    @Column({nullable:false})
    due_date: string;

    @Column({nullable:false})
    mid:number;

    @Column({nullable:false})
    status: string;

    @Column({nullable:false})
    dos: string;
}