import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';

const routes: Routes = [
  {
    path: 'pag-principal',
    component: PagPrincipalComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
