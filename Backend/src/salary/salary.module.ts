import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { Salaryentity } from 'src/entities/salary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Salaryentity]) , Salaryentity],
  controllers: [SalaryController],
  providers: [SalaryService],
})
export class SalaryModule {}
