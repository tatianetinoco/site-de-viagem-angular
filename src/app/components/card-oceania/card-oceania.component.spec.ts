import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOceaniaComponent } from './card-oceania.component';

describe('CardOceaniaComponent', () => {
  let component: CardOceaniaComponent;
  let fixture: ComponentFixture<CardOceaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOceaniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
