import { Routes } from '@angular/router';
import { Visualizar } from './components/visualizar/visualizar';

export const routes: Routes = [
    {path: 'dog/:raca', component: Visualizar}
];
