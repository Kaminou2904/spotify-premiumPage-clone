import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPremiumComponent } from './why-premium.component';

describe('WhyPremiumComponent', () => {
  let component: WhyPremiumComponent;
  let fixture: ComponentFixture<WhyPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
