import { Test, TestingModule } from '@nestjs/testing';
import { PerformencegoalController } from './performencegoal.controller';
import { PerformencegoalService } from './performencegoal.service';

describe('PerformencegoalController', () => {
  let controller: PerformencegoalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformencegoalController],
      providers: [PerformencegoalService],
    }).compile();

    controller = module.get<PerformencegoalController>(PerformencegoalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
