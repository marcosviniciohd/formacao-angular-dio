import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = "admin";
  constructor(){
    this.produtos = [
      "mouse",
      "Monitor",
      "Gabinete",
      "cabo",
      "fonte",
    ]
  }

  adicionar(): void {
    this.produtos.push('Marcos');
  }

  remover(): void {
    this.produtos.pop();
  }

}
