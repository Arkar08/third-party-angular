import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonughnutChartComponent } from './donughnut-chart.component';

describe('DonughnutChartComponent', () => {
  let component: DonughnutChartComponent;
  let fixture: ComponentFixture<DonughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonughnutChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
