import { Test, TestingModule } from '@nestjs/testing';
import { MyblogtxtService } from './myblogtxt.service';

describe('MyblogtxtService', () => {
  let service: MyblogtxtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyblogtxtService],
    }).compile();

    service = module.get<MyblogtxtService>(MyblogtxtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
