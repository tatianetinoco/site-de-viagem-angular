import { Component, Input } from '@angular/core';
import { ICity } from '../../Model/icity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-africa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-africa.component.html',
  styleUrl: './card-africa.component.css'
})
export class CardAfricaComponent {
  @Input() cardAfrica?:ICity[] = [];
}
