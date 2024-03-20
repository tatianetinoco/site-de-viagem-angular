import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmericaComponent } from './card-america.component';

describe('CardAmericaComponent', () => {
  let component: CardAmericaComponent;
  let fixture: ComponentFixture<CardAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAmericaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
