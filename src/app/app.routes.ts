import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AmericaComponent } from './pages/america/america.component';
import { EuropaComponent } from './pages/europa/europa.component';

export const routes: Routes = [
    {path:'', title: "Home", component:HomeComponent},
    {path:'sobre', title: "Sobre", component:AboutComponent},
    {path:'contato', title: "Contato", component:ContactComponent},
    {path:'america', title:"Américas", component:AmericaComponent},
    {path:'europa', title:"Europa", component:EuropaComponent}
];
