import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { Ecredit } from 'src/entities/ecredit';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ecredit]) , Ecredit],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
