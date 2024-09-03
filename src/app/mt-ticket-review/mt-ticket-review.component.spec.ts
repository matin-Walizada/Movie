import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTicketReviewComponent } from './mt-ticket-review.component';

describe('MtTicketReviewComponent', () => {
  let component: MtTicketReviewComponent;
  let fixture: ComponentFixture<MtTicketReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtTicketReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtTicketReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
