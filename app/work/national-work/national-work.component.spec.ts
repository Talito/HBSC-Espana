import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalWorkComponent } from './national-work.component';

describe('NationalWorkComponent', () => {
  let component: NationalWorkComponent;
  let fixture: ComponentFixture<NationalWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
