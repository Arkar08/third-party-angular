import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleLayoutComponent } from './sigle-layout.component';

describe('SigleLayoutComponent', () => {
  let component: SigleLayoutComponent;
  let fixture: ComponentFixture<SigleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigleLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
