import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

const routes: Routes = [
  { path: 'comp-atributos', component: CompAtributosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
