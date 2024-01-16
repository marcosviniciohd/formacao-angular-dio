import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas-project';
  isAliveCard: boolean = true;
  item: string = '';
  lista: string [] = [];

  adicionarNaLista (){
    this.lista.push(this.item);
    this.item = '';
  }
}
