import { Component } from '@angular/core';
import { ICity } from '../../Model/icity';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardEuropaComponent } from '../../components/card-europa/card-europa.component';

@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardEuropaComponent],
  templateUrl: './europa.component.html',
  styleUrl: './europa.component.css'
})
export class EuropaComponent {
  
  europa:ICity[] = [
    {
      id: 1,
      img: "../../../assets/img-europa-berlim.jpg",
      titulo: "Berlim",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 400,
    },
    {
      id: 2,
      img: "../../../assets/img-europa-grecia.jpg",
      titulo: "Grécia",
      dia: "5 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 3,
      img: "../../../assets/img-europa-inglaterra.jpg",
      titulo: "Inglaterra",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 450,
    },
    {
      id: 4,
      img: "../../../assets/img-europa-lisboa.jpg",
      titulo: "Lisboa",
      dia: "7 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 600,
    },
    {
      id: 5,
      img: "../../../assets/img-europa-madri.jpg",
      titulo: "Madri",
      dia: "6 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 650,
    },
    {
      id: 6,
      img: "../../../assets/img-europa-paris.jpg",
      titulo: "Paris",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },

  ]

}
