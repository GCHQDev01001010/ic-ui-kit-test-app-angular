import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageB } from './page-b';
import { PageA } from './page-a';

const routes: Routes = [
  {path: 'a', component: PageA},
  {path: 'b', component: PageB}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
