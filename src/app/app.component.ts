import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public mostrar: boolean;
  constructor() {
    this.mostrar = false;
  }
  title = 'angularempleadosauth';
}
