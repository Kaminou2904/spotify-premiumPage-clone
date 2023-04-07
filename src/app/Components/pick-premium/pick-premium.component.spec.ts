import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickPremiumComponent } from './pick-premium.component';

describe('PickPremiumComponent', () => {
  let component: PickPremiumComponent;
  let fixture: ComponentFixture<PickPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
