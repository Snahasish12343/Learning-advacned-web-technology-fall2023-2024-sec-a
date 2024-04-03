import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salaryentity } from 'src/entities/salary.entity';

@Injectable()
export class SalaryService {
 
  
  constructor(
    @InjectRepository(Salaryentity) private readonly salaryService: Repository<Salaryentity>
  
    ){}
async create(createsalarydto : CreateSalaryDto){
    return await this.salaryService.save(createsalarydto);
}
async findOne(id: number){
    return await this.salaryService.findOne({where: {id : id}});
}

async update(id: number, updatesalarydto: UpdateSalaryDto){
    return await this.salaryService.update(id, updatesalarydto);
}

async delete(id: number){
    return await this.salaryService.delete(id)
}

async findAll(): Promise<Salaryentity[]> {
    return this.salaryService.find();
  }


}
