import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtSelectionAndPurchaseComponent } from './mt-selection-and-purchase.component';

describe('MtSelectionAndPurchaseComponent', () => {
  let component: MtSelectionAndPurchaseComponent;
  let fixture: ComponentFixture<MtSelectionAndPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtSelectionAndPurchaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtSelectionAndPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
