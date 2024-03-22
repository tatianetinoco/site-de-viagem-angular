import { Component, Input } from '@angular/core';
import { ICity } from '../../Model/icity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-oceania',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-oceania.component.html',
  styleUrl: './card-oceania.component.css'
})
export class CardOceaniaComponent {
  @Input() cardOceania?:ICity[] = [];
}
