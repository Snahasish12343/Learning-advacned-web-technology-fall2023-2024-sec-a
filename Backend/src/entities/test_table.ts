import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test_table")
export class Test_table{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    title: string;

    @Column({nullable:false})
    due_date: string;

    @Column({nullable:false})
    description: string;

}