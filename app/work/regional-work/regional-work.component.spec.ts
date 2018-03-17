import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalWorkComponent } from './regional-work.component';

describe('RegionalWorkComponent', () => {
  let component: RegionalWorkComponent;
  let fixture: ComponentFixture<RegionalWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
