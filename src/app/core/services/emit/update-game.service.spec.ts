import { TestBed } from '@angular/core/testing';

import { UpdateGameService } from './update-game.service';

describe('UpdateGameService', () => {
  let service: UpdateGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
