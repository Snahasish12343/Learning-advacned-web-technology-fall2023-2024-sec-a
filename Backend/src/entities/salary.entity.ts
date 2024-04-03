import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salary")
export class Salaryentity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    ename: string;

    @Column({nullable:false})
    amount: number;

    @Column({nullable:false})
    bonus: number;

    @Column({nullable:false})
    totalsalary: number;

}
