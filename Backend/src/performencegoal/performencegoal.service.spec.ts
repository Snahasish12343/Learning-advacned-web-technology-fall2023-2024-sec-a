import { Test, TestingModule } from '@nestjs/testing';
import { PerformencegoalService } from './performencegoal.service';

describe('PerformencegoalService', () => {
  let service: PerformencegoalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformencegoalService],
    }).compile();

    service = module.get<PerformencegoalService>(PerformencegoalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
