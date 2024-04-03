import { Module } from '@nestjs/common';
import { PerformencegoalService } from './performencegoal.service';
import { PerformencegoalController } from './performencegoal.controller';
import { Test_table } from 'src/entities/test_table';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Test_table]), Test_table] ,
  controllers: [PerformencegoalController],
  providers: [PerformencegoalService],
})
export class PerformencegoalModule {}
