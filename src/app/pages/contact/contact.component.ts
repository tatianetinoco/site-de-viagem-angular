import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MenuComponent, FooterComponent, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
