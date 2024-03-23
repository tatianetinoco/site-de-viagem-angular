import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardAntartidaComponent } from '../../components/card-antartida/card-antartida.component';
import { ICity } from '../../Model/icity';

@Component({
  selector: 'app-antartida',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardAntartidaComponent],
  templateUrl: './antartida.component.html',
  styleUrl: './antartida.component.css'
})
export class AntartidaComponent {
  antartida:ICity[] = [
    {
      id: 1,
      img: "../../../assets/img-antartida-ilha-decepcao.jpg",
      titulo: "Ilha Decepção",
      dia: "7 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 700,
    },
    {
      id: 2,
      img: "../../../assets/img-antartida-ilha-do-rei-george.jpg",
      titulo: "Ilha Do Rei George",
      dia: "4 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 550,
    },
    {
      id: 3,
      img: "../../../assets/img-antartida-porto-lockroy.jpg",
      titulo: "Porto Lockroy",
      dia: "3 Dias",
      paragrafo1 : "All inclusive",
      paragrafo2 : "Passagem Aérea Econômica",
      paragrafo3 : "Hospedagem Econômica",
      preco: 400,
    },
    
    
  ]
}
