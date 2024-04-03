import { Injectable } from '@nestjs/common';
import { Test_table } from 'src/entities/test_table';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Createtabledtoorg } from './dto/createtabledtoorg';
import { Updatetabledtoorg } from './dto/updatetabledtoorg';

@Injectable()
export class PerformencegoalService {
  
    constructor(
        @InjectRepository(Test_table) private readonly tableRepo: Repository<Test_table>
        
        ){

    }

    async createTable(createtabledtoorg : Createtabledtoorg){
        return await this.tableRepo.save(createtabledtoorg);    

    }
    async findOne(id: number){
      return await this.tableRepo.findOne({where: {id : id}});
  }
  
  async update(id: number, updatetabledtoorg: Updatetabledtoorg){
      return await this.tableRepo.update(id, updatetabledtoorg);
  }
  
  async delete(id: number){
      return await this.tableRepo.delete(id)
  }

  async findAll(): Promise<Test_table[]> {
    return this.tableRepo.find();
  }


}
