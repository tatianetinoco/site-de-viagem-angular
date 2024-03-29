import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AmericaComponent } from './pages/america/america.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { AfricaComponent } from './pages/africa/africa.component';
import { OceaniaComponent } from './pages/oceania/oceania.component';
import { AntartidaComponent } from './pages/antartida/antartida.component';

export const routes: Routes = [
    {path:'', title: "Home", component:HomeComponent},
    {path:'sobre', title: "Sobre", component:AboutComponent},
    {path:'contato', title: "Contato", component:ContactComponent},
    {path:'america', title:"Américas", component:AmericaComponent},
    {path:'europa', title:"Europa", component:EuropaComponent},
    {path:'asia', title:"Ásia", component:AsiaComponent},
    {path:'africa', title:"África", component:AfricaComponent},
    {path:'oceania', title:"Oceania", component:OceaniaComponent},
    {path:'antartida', title:"Antártida", component:AntartidaComponent}
];
