import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ICity } from '../../Model/icity';
import { CardAmericaComponent } from '../../components/card-america/card-america.component';

@Component({
  selector: 'app-america',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardAmericaComponent],
  templateUrl: './america.component.html',
  styleUrl: './america.component.css'
})
export class AmericaComponent {
  americas:ICity[] = [
    {
      id: 1,
      img: "../../../assets/img-america-disney.jpg",
      titulo: "Disney",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 700,
    },
    {
      id: 2,
      img: "../../../assets/img-america-rio.jpg",
      titulo: "Rio De Janeiro",
      dia: "5 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 3,
      img: "../../../assets/img-america-equador.jpg",
      titulo: "Equador",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 400,
    },
    {
      id: 4,
      img: "../../../assets/img-america-argentina.jpg",
      titulo: "Argentina",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 300,
    },
    {
      id: 5,
      img: "../../../assets/img-america-chile.jpg",
      titulo: "Chile",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 450,
    },
    {
      id: 6,
      img: "../../../assets/img-america-las-vegas.jpg",
      titulo: "Las Vegas",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 7,
      img: "../../../assets/img-america-new-york.jpg",
      titulo: "New York",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 8,
      img: "../../../assets/img-america-peru.jpg",
      titulo: "Peru",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },
    {
      id: 9,
      img: "../../../assets/img-america-toronto.jpg",
      titulo: "Toronto",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 500,
    },

  ]
  

}
