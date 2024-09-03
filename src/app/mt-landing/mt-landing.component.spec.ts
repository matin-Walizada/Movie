import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtLandingComponent } from './mt-landing.component';

describe('MtLandingComponent', () => {
  let component: MtLandingComponent;
  let fixture: ComponentFixture<MtLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
