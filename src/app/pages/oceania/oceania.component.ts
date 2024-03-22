import { Component } from '@angular/core';
import { ICity } from '../../Model/icity';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardOceaniaComponent } from '../../components/card-oceania/card-oceania.component';

@Component({
  selector: 'app-oceania',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardOceaniaComponent],
  templateUrl: './oceania.component.html',
  styleUrl: './oceania.component.css'
})
export class OceaniaComponent {

  ocenania:ICity[] = [
    {
      id: 1,
      img: "../../../assets/img-oceania-australia.jpg",
      titulo: "Austrália",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 2,
      img: "../../../assets/img-oceania-nova-zelandia.jpg",
      titulo: "Nova Zelândia",
      dia: "6 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 700,
    },
    {
      id: 3,
      img: "../../../assets/img-oceania-tuvalu.jpg",
      titulo: "Tuvalu",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 400,
    },
   
  ]

}
