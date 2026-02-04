import { Routes } from '@angular/router';
import { Visualizar } from './components/visualizar/visualizar';
import { Main } from './components/main/main'; 

export const routes: Routes = [
    { path: '', component: Main }, 
    { path: 'visualizar/:raca', component: Visualizar }
];