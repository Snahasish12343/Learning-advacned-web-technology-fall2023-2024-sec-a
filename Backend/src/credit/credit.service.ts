import { Injectable } from '@nestjs/common';
import { Ecredit } from 'src/entities/ecredit';
import { Createcreditdto } from './dto/createcreditdto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Updatecreditdto } from './dto/updatecreditdto';
import { Pool } from 'pg';

@Injectable()
export class CreditService {

  updatecredit(id: number, Updatecreditdto: Updatecreditdto) {
    throw new Error('Method not implemented.');
  }

    constructor(
        @InjectRepository(Ecredit) private readonly creditRepo: Repository<Ecredit>
      
        ){}

        

    async createcredit(createcreditdto : Createcreditdto){
        return await this.creditRepo.save(createcreditdto);
    }

    async findOne(id: number){
        return await this.creditRepo.findOne({where: {id:id}});
    }

    async findAll(): Promise<Ecredit[]> {
        return this.creditRepo.find();
      }

    async update(id: number, updatecreditdto: Updatecreditdto){
        return await this.creditRepo.update(id, updatecreditdto);
    }
    
    async delete(id: number){
        return await this.creditRepo.delete(id)
    }  


   




}

