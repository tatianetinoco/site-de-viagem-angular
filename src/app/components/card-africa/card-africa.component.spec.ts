import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAfricaComponent } from './card-africa.component';

describe('CardAfricaComponent', () => {
  let component: CardAfricaComponent;
  let fixture: ComponentFixture<CardAfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAfricaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
