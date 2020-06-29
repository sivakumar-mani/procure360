import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDashboardComponent } from './inner-dashboard.component';

describe('InnerDashboardComponent', () => {
  let component: InnerDashboardComponent;
  let fixture: ComponentFixture<InnerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
