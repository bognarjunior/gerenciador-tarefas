import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListarTarefasComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
