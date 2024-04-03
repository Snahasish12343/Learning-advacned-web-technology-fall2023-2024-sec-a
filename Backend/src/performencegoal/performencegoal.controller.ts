import { Controller, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import { PerformencegoalService } from './performencegoal.service';
import { Createtabledtoorg } from './dto/createtabledtoorg';
import { Updatetabledtoorg } from './dto/updatetabledtoorg';

@Controller('performence')
export class PerformencegoalController {
  constructor(private readonly performencegoalService: PerformencegoalService) {}

@Post('create')
createtable(@Body() createtabledtoorg : Createtabledtoorg){
  return this.performencegoalService.createTable(createtabledtoorg);
}


@Put('update/:id')
  update(@Param('id') id: number, @Body() updatetabledtoorg: Updatetabledtoorg){
    return this.performencegoalService.update(id, updatetabledtoorg);
  }


  @Get('get/:id')
  userId(@Param('id') id:number){
      return this.performencegoalService.findOne(id);
  }

 @Delete('delete/:id')
  delete(@Param('id') id:number){
      return this.performencegoalService.delete(id);
  }

  @Get('getAll')
  getAll() {
    return this.performencegoalService.findAll(); 


}

}