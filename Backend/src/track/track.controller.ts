import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TrackService } from './track.service';
import { Createtrackdto } from './dto/createtrackdto';
import { Updatetabledto } from 'src/track/dto/updatetabledto';
import { Createtrackmanagerdto } from './dto/createtrackmanagerdto';
import { Updatetrackmanagerdto } from './dto/updatetrackmanagerdto';


@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  

  @Post('createbyorg')
  createtable(@Body() createtrackdto : Createtrackdto){
    return this.trackService.createTable(createtrackdto);
  }


  @Put('updatebyorg/:id')
  update(@Param('id') id: number, @Body() updatetabledto: Updatetabledto){
    return this.trackService.update(id, updatetabledto);
  }


  @Get('getbyorg/:id')
  userId(@Param('id') id:number){
      return this.trackService.findOne(id);
  }

 @Delete('deletebyorg/:id')
  delete(@Param('id') id:number){
      return this.trackService.delete(id);
  }
    


@Post('createbymanager')
createtrack(@Body() createtrackmanagerdto : Createtrackmanagerdto){
  return this.trackService.createtrack(createtrackmanagerdto);
}


@Put('updatebymanager/:mid')
updatetrack(@Param('mid') mid: number, @Body() updatetrackmanagerdto: Updatetrackmanagerdto){
  return this.trackService.updatetrack(mid, updatetrackmanagerdto);
}


@Get('getbymanager/:mid')
userIdtrack(@Param('mid') mid:number){
    return this.trackService.userIdtrack(mid);
}

@Delete('deletebymanager/:mid')
deletetrack(@Param('mid') mid:number){
    return this.trackService.deletetrack(mid);
}
}
