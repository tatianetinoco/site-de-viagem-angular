import { Component } from '@angular/core';
import { ICity } from '../../Model/icity';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardAfricaComponent } from '../../components/card-africa/card-africa.component';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardAfricaComponent],
  templateUrl: './africa.component.html',
  styleUrl: './africa.component.css'
})
export class AfricaComponent {

  africa:ICity[] = [
    {
      id: 1,
      img: "../../../assets/img-africa-egito.jpg",
      titulo: "Egito",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 2,
      img: "../../../assets/img-africa-africa-do-sul.jpg",
      titulo: "África Do Sul",
      dia: "6 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 600,
    },
    {
      id: 3,
      img: "../../../assets/img-africa-ilhas-mauricio.jpg",
      titulo: "Ilhas Maurício",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 480,
    },
    {
      id: 4,
      img: "../../../assets/img-africa-quenia.jpg",
      titulo: "Quênia",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 450,
    },
    {
      id: 5,
      img: "../../../assets/img-africa-tanzania.jpg",
      titulo: "Tanzânia",
      dia: "5 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 600,
    },
    {
      id: 6,
      img: "../../../assets/img-africa-marrocos.jpg",
      titulo: "Marrocos",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
  ]
}
