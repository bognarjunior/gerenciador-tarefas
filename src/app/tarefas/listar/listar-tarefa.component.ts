import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from './../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    // this.tarefas = [
    //   new Tarefa(1, "Frango Frito", false),
    //   new Tarefa(2, "Abobora madura", true)
    // ]
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa"' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
