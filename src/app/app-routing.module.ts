import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImobiliarioComponent } from './main/imobiliario/imobiliario.component';
import { LogradouroComponent } from './main/logradouro/logradouro.component';

const routes: Routes = [
  {path: 'imobiliario', component: ImobiliarioComponent},
  { path: 'logradouro', component:  LogradouroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
