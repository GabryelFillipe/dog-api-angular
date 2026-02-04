import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Dog } from '../../services/dog';
import { Component, OnInit, inject, ChangeDetectorRef, signal } from '@angular/core';

@Component({
  selector: 'app-visualizar',
  imports: [CommonModule],
  templateUrl: './visualizar.html',
  styleUrl: './visualizar.css',
})
export class Visualizar implements OnInit {

  private route = inject(ActivatedRoute)
  private dogService = inject(Dog)

  urlImagem = signal<string[]>([])

  racaAtual = signal<string>('')

  mensagemErro = signal<string>('')

  ngOnInit() {

    this.route.queryParams.subscribe(() => {

      const raca = this.route.snapshot.paramMap.get('raca')

      if (raca) {
        this.racaAtual.set(raca)

        this.urlImagem.set([])
        this.mensagemErro.set('')

        this.dogService.buscarImagemPorRaca(raca).subscribe({
          next: (dados) => {
      
            this.urlImagem.set(dados.message)
          },
        
          error: (err) => this.mensagemErro.set(`Raça ${raca} não encontrada`)
        })
      }
    })
  }
}

