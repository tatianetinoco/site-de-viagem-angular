import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEuropaComponent } from './card-europa.component';

describe('CardEuropaComponent', () => {
  let component: CardEuropaComponent;
  let fixture: ComponentFixture<CardEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEuropaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
