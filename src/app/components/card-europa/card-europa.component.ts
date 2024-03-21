import { Component, Input } from '@angular/core';
import { ICity } from '../../Model/icity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-europa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-europa.component.html',
  styleUrl: './card-europa.component.css'
})
export class CardEuropaComponent {
  @Input() cardEuropa?:ICity[] = [];
}
