import { Injectable } from '@nestjs/common';
import { Subsupadmin } from 'src/entities/subsupadmin';
import { Createsubsupadmindto } from './dto/createsubsupadmindto';
import { Updatesubsupadmindto } from './dto/updatesubsupadmindto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Suborg } from 'src/entities/suborganization';
import { Createsuborgdto } from './dto/createsuborgdto';
import { Updatesuborgdto } from './dto/updatesuborgdto';

@Injectable()
export class SubscriptionService {

constructor(
             
    @InjectRepository(Subsupadmin) private readonly supadmin: Repository<Subsupadmin>,
    @InjectRepository(Suborg) private readonly suporg: Repository<Suborg>

    ){}


async createTable(createsubsupadmindto : Createsubsupadmindto){
    return await this.supadmin.save(createsubsupadmindto);
}


async update(id: number, updatesubsupadmindto: Updatesubsupadmindto){
    return await this.supadmin.update(id, updatesubsupadmindto);
}


async findOne(id: number){
    return await this.supadmin.findOne({where: {id:id}});
}


async delete(id: number){
    return await this.supadmin.delete(id)
}

async findAll(): Promise<Subsupadmin[]> {
    return this.supadmin.find();
  }



//xzxcvghjkzsdfghj



async createorgtable(createsuborgdto : Createsuborgdto){
    return await this.suporg.save(createsuborgdto);
}


async updateorgtable(id: number, updatesuborgdto: Updatesuborgdto){
    return await this.suporg.update(id, updatesuborgdto);
}


async findOneorgtable(id: number){
    return await this.suporg.findOne({where: {id:id}});
}


async deleteorgtable(id: number){
    return await this.suporg.delete(id)
}

async findAllorg(): Promise<Suborg[]> {
    return this.suporg.find();
  }


}