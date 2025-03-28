import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatalogoComponent} from './components/pages/catalogo/catalogo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edurock';
}
