import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDropdownComponent } from './payment-dropdown.component';

describe('PaymentDropdownComponent', () => {
  let component: PaymentDropdownComponent;
  let fixture: ComponentFixture<PaymentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
