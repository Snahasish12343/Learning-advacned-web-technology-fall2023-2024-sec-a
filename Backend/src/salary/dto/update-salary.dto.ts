import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaryDto } from './create-salary.dto';

export class UpdateSalaryDto extends PartialType(CreateSalaryDto) {
    id:number;
    ename:string;
    amount:number;
    bonus:number;
    totalsalarys:number;
}
