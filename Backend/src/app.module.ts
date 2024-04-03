import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformencegoalModule } from './performencegoal/performencegoal.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackModule } from './track/track.module';
import { SalaryModule } from './salary/salary.module';
import { CreditModule } from './credit/credit.module';
import { SubscriptionModule } from './subscription/subscription.module';
import config from 'ormconfig';


@Module({
  imports: [PerformencegoalModule, TypeOrmModule.forRoot(config), TrackModule, SalaryModule, CreditModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
