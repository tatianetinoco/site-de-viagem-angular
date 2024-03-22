import { Component } from '@angular/core';
import { ICity } from '../../Model/icity';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardAsiaComponent } from '../../components/card-asia/card-asia.component';

@Component({
  selector: 'app-asia',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardAsiaComponent],
  templateUrl: './asia.component.html',
  styleUrl: './asia.component.css'
})
export class AsiaComponent {

  asia:ICity[] = [
    {
      id: 1,
      img: "../../../assets/img-asia-dubai.jpg",
      titulo: "Dubai",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 700,
    },
    {
      id: 2,
      img: "../../../assets/img-asia-bangkok.jpg",
      titulo: "Bangkok",
      dia: "6 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 550,
    },
    {
      id: 3,
      img: "../../../assets/img-asia-japao.jpg",
      titulo: "Japão",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 400,
    },
    {
      id: 4,
      img: "../../../assets/img-asia-india.jpg",
      titulo: "Índia",
      dia: "5 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 600,
    },
    {
      id: 5,
      img: "../../../assets/img-asia-ilhas-maldivas.jpg",
      titulo: "Ilhas Maldivas",
      dia: "5 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 700,
    },
    {
      id: 6,
      img: "../../../assets/img-asia-pequim.jpg",
      titulo: "Pequim",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 650,
    },
    
  ]

}
