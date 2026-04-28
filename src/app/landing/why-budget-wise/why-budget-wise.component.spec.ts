import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBudgetWiseComponent } from './why-budget-wise.component';

describe('WhyBudgetWiseComponent', () => {
  let component: WhyBudgetWiseComponent;
  let fixture: ComponentFixture<WhyBudgetWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBudgetWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyBudgetWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
