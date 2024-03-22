import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAsiaComponent } from './card-asia.component';

describe('CardAsiaComponent', () => {
  let component: CardAsiaComponent;
  let fixture: ComponentFixture<CardAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAsiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
