import { Injectable } from '@nestjs/common';
import { Trackorg } from 'src/entities/trackorg';
import { Createtrackdto } from './dto/createtrackdto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Updatetabledto } from './dto/updatetabledto';
import { Createtrackmanagerdto } from './dto/createtrackmanagerdto';
import { Updatetrackmanagerdto } from './dto/updatetrackmanagerdto';
import { Trackmanager } from 'src/entities/trackmanager';


@Injectable()
export class TrackService {
    

    constructor(
             
        @InjectRepository(Trackorg) private readonly tableRepo: Repository<Trackorg>,
        @InjectRepository(Trackmanager) private readonly trackRepo: Repository<Trackmanager>

        ){}


    async createTable(createtrackdto : Createtrackdto){
        return await this.tableRepo.save(createtrackdto);
    }


    async update(id: number, updatetrackdto: Updatetabledto){
        return await this.tableRepo.update(id, updatetrackdto);
    }


    async findOne(id: number){
        return await this.tableRepo.findOne({where: {id:id}});
    }


    async delete(id: number){
        return await this.tableRepo.delete(id)
    }

    //

    async createtrack(createtrackmanagerdto : Createtrackmanagerdto){
        return await this.trackRepo.save(createtrackmanagerdto);
    }


    async updatetrack(mid: number, updatetrackmanagerdto: Updatetrackmanagerdto){
        return await this.trackRepo.update(mid, updatetrackmanagerdto);
    }


    async userIdtrack(mid: number){
        return await this.trackRepo.findOne({where: {mid:mid}});
    }


    async deletetrack(mid: number){
        return await this.trackRepo.delete(mid)
    }
}
