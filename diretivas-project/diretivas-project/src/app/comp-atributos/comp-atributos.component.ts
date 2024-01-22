import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo: string = 'enable';
  corFundo: string = 'blue';
  corDaFonte: string = 'yellow';
  item: string = '';
  lista: string[] = [];
  isEnableBlock: boolean = false;



  adicionarLista(): void {
    this.lista.push(this.item);
  }

  trocar(): void {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
