import { Component, Input } from '@angular/core';
import { ICity } from '../../Model/icity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-asia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-asia.component.html',
  styleUrl: './card-asia.component.css'
})
export class CardAsiaComponent {
  @Input() cardAsia?:ICity[] = [];
}
