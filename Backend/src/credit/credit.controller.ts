import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreditService } from './credit.service';
import { Createcreditdto } from './dto/createcreditdto';
import { Updatecreditdto } from './dto/updatecreditdto';

@Controller('ecredit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}
  


  @Post('create')
  createcredit(@Body() createtrackdto : Createcreditdto){
    return this.creditService.createcredit(createtrackdto);
  }


  @Put('update/:id')
  update(@Param('id') id: number, @Body() updatecreditdto: Updatecreditdto){
    return this.creditService.update(id, updatecreditdto);
  }


  @Put('add/:id')
  updatecredit(@Param('id') id: number, @Body() Updatecreditdto: Updatecreditdto){
    return this.creditService.updatecredit(id, Updatecreditdto);
  }


  @Put('substract/:id')
  updatecredit2(@Param('id') id: number, @Body() Updatecreditdto: Updatecreditdto){
    return this.creditService.updatecredit(id, Updatecreditdto);
  }


  @Get('get/:id')
  userId(@Param('id') id:number){
      return this.creditService.findOne(id);
  }

 @Delete('delete/:id')
  delete(@Param('id') id:number){
      return this.creditService.delete(id);
  }

  @Get('getAll')
  getAll() {
    return this.creditService.findAll(); 
  }

}

