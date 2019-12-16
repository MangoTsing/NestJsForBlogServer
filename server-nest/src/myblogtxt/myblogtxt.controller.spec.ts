import { Test, TestingModule } from '@nestjs/testing';
import { MyblogtxtController } from './myblogtxt.controller';

describe('Myblogtxt Controller', () => {
  let controller: MyblogtxtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyblogtxtController],
    }).compile();

    controller = module.get<MyblogtxtController>(MyblogtxtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
