import { Component, Input } from '@angular/core';
import { ICity } from '../../Model/icity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-america',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-america.component.html',
  styleUrl: './card-america.component.css'
})
export class CardAmericaComponent {
  @Input() cardAmerica?:ICity[] = [];
}
