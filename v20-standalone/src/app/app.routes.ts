import { Routes } from '@angular/router';
import { PageA } from './page-a';
import { PageB } from './page-b';

export const routes: Routes = [
    { path: 'a', component: PageA },
    { path: 'b', component: PageB },
];
