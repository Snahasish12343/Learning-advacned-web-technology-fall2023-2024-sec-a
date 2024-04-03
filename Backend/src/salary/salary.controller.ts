import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Post('create')
  create(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salaryService.create(createSalaryDto);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() updateSalaryDto: UpdateSalaryDto) {
    return this.salaryService.update(id, updateSalaryDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.salaryService.delete(id);
  }

  @Get('individual/:id')
  userId(@Param('id') id: number) {
    return this.salaryService.findOne(id);
  }

  @Get('getAll')
  getAll() {
    return this.salaryService.findAll(); 
  }
  
}