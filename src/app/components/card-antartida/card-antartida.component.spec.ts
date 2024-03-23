import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAntartidaComponent } from './card-antartida.component';

describe('CardAntartidaComponent', () => {
  let component: CardAntartidaComponent;
  let fixture: ComponentFixture<CardAntartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAntartidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAntartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
