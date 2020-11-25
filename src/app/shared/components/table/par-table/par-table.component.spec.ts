import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTableComponent } from './par-table.component';

describe('ParTableComponent', () => {
  let component: ParTableComponent;
  let fixture: ComponentFixture<ParTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
