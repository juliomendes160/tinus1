import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImobiliarioComponent } from './content/imobiliario/imobiliario.component';
import { LogradouroComponent } from './content/logradouro/logradouro.component';

const routes: Routes = [
  {path: 'imobiliario', component: ImobiliarioComponent},
  { path: 'logradouro', component:  LogradouroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
