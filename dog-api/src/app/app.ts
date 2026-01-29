import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './components/main/main';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer,Header,Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gabryel');
}
