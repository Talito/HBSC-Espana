import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalWorkComponent } from './international-work.component';

describe('InternationalWorkComponent', () => {
  let component: InternationalWorkComponent;
  let fixture: ComponentFixture<InternationalWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
