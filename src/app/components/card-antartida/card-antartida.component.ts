import { Component, Input } from '@angular/core';
import { ICity } from '../../Model/icity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-antartida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-antartida.component.html',
  styleUrl: './card-antartida.component.css'
})
export class CardAntartidaComponent {
  @Input() cardAntartida?:ICity[] = [];
}
