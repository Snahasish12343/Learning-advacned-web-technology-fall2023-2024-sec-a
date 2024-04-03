import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subsupadmin } from 'src/entities/subsupadmin';
import { Suborg } from 'src/entities/suborganization';

@Module({
  imports: [TypeOrmModule.forFeature([Subsupadmin, Suborg]) , Subsupadmin, Suborg],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
})
export class SubscriptionModule {}
