import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntartidaComponent } from './antartida.component';

describe('AntartidaComponent', () => {
  let component: AntartidaComponent;
  let fixture: ComponentFixture<AntartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntartidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
