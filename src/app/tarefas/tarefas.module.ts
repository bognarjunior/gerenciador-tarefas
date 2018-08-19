import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
