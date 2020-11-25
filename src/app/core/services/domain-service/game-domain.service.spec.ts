import { TestBed } from '@angular/core/testing';

import { GameDomainService } from './game-domain.service';

describe('GameDomainService', () => {
  let service: GameDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
