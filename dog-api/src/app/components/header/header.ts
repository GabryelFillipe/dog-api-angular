import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Output() buscaRealizada = new EventEmitter<string>()

  buscar(nomeRaca: string){
    if (nomeRaca.trim()){
      this.buscaRealizada.emit(nomeRaca)
    }
  }

}
