import { TestBed } from '@angular/core/testing';

import { CourseDomainService } from './course-domain.service';

describe('CourseDomainService', () => {
  let service: CourseDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
