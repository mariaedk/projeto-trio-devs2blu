import { UpdateRemedioComponent } from './components/remedio/update-remedio/update-remedio.component';
import { ListaPacienteComponent } from './components/paciente/lista-paciente/lista-paciente.component';
import { ListaRemedioComponent } from './components/remedio/lista-remedio/lista-remedio.component';
import { CadastroRemedioComponent } from './components/remedio/cadastro-remedio/cadastro-remedio.component';
import { CadastroPacienteComponent } from './components/paciente/cadastro-paciente/cadastro-paciente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'cadastro-paciente', component: CadastroPacienteComponent},
  {path:'cadastro-remedio', component: CadastroRemedioComponent},
  {path:'lista-paciente', component:ListaPacienteComponent},
  {path:'lista-remedio', component:ListaRemedioComponent},
  {path:'update-remedio', component:UpdateRemedioComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
