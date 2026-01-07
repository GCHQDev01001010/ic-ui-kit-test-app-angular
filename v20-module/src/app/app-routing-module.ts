import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageA } from './page-a';
import { PageB } from './page-b';

const routes: Routes = [
  { path: 'a', component: PageA },
  { path: 'b', component: PageB }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
