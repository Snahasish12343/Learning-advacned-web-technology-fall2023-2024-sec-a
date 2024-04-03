import { IsString, IsNumber } from "class-validator";

export class Updatecreditdto{

    @IsNumber()
    id: number;
    
    @IsString()
    emname: string;

    @IsNumber()
    currentcredit: number;
}