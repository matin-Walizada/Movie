import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtConfirmPurchaseComponent } from './mt-confirm-purchase.component';

describe('MtConfirmPurchaseComponent', () => {
  let component: MtConfirmPurchaseComponent;
  let fixture: ComponentFixture<MtConfirmPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtConfirmPurchaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtConfirmPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
