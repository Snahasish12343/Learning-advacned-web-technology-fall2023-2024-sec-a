import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Trackorg } from 'src/entities/trackorg';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trackmanager } from 'src/entities/trackmanager';

@Module({
  imports: [TypeOrmModule.forFeature([Trackorg, Trackmanager]) , Trackorg, Trackmanager ],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
