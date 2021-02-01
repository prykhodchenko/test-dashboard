import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCountryStatisticModalComponent } from './dashboard-country-statistic-modal.component';

describe('DashboardCountryStatisticComponent', () => {
  let component: DashboardCountryStatisticModalComponent;
  let fixture: ComponentFixture<DashboardCountryStatisticModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCountryStatisticModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCountryStatisticModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
