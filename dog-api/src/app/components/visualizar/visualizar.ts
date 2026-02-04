import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { Dog } from '../../services/dog'
import { Component, OnInit, inject, signal } from '@angular/core'

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
    // Observa a URL para saber quando a raça digitada muda
    this.route.paramMap.subscribe((params) => {
      const raca = params.get('raca')

      if (raca) {
        // Atualiza o nome da raça e limpa os dados anteriores
        this.racaAtual.set(raca)
        this.urlImagem.set([])
        this.mensagemErro.set('')

        // Chama o serviço para buscar as novas imagens na API
        this.dogService.buscarImagemPorRaca(raca).subscribe({
          next: (dados) => {
            // Se der certo, guarda a lista de imagens no signal
            this.urlImagem.set(dados.message)
          },
          error: (err) => {
            // Se der erro (raça inexistente), avisa o usuário
            this.mensagemErro.set(`Raça ${raca} não encontrada`)
            console.error(err)
          }
        })
      }
    })
  }
}