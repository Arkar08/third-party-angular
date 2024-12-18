import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveTableComponent } from './inactive-table.component';

describe('InactiveTableComponent', () => {
  let component: InactiveTableComponent;
  let fixture: ComponentFixture<InactiveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactiveTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
