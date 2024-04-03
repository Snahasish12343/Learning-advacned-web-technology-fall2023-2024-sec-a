import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Createsubsupadmindto } from './dto/createsubsupadmindto';
import { Updatesubsupadmindto } from './dto/updatesubsupadmindto';
import { Createsuborgdto } from './dto/createsuborgdto';
import { Updatesuborgdto } from './dto/updatesuborgdto';


@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('createbysupadmin')
  createtable(@Body() Createsubsupadmindto : Createsubsupadmindto){
    return this.subscriptionService.createTable(Createsubsupadmindto);
  }


  @Put('updatesubbysupadmin/:id')
  update(@Param('id') id: number, @Body() updatesubsupadmindto: Updatesubsupadmindto){
    return this.subscriptionService.update(id, updatesubsupadmindto);
  }

 
  @Get('getsubbysupadmin/:id')
  userId(@Param('id') id:number){
      return this.subscriptionService.findOne(id);
  }

 @Delete('deletesubbysupadmin/:id')
  delete(@Param('id') id:number){
      return this.subscriptionService.delete(id);
  }


  @Get('getAlladmin')
  getAll() {
    return this.subscriptionService.findAll(); 
  }


  //


  @Post('createbyorg')
  createorgtable(@Body() createsuborgdto : Createsuborgdto){
    return this.subscriptionService.createorgtable(createsuborgdto);
  }


  @Put('updatebyorg/:id')
  updateorgtable(@Param('id') id: number, @Body() updatesuborgdto: Updatesuborgdto){
    return this.subscriptionService.updateorgtable(id, updatesuborgdto);
  }

 
  @Get('getbyorg/:id')
  userIdorgtable(@Param('id') id:number){
      return this.subscriptionService.findOne(id);
  }

 @Delete('deletebyorg/:id')
  deleteorgtable(@Param('id') id:number){
      return this.subscriptionService.delete(id);
  }

  @Get('getAllorg')
  getAll2() {
    return this.subscriptionService.findAllorg(); 
  }






}
