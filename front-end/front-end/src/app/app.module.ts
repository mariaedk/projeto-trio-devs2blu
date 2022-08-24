import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroPacienteComponent } from './components/paciente/cadastro-paciente/cadastro-paciente.component';
import { CadastroRemedioComponent } from './components/remedio/cadastro-remedio/cadastro-remedio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaPacienteComponent } from './components/paciente/lista-paciente/lista-paciente.component';
import { ListaRemedioComponent } from './components/remedio/lista-remedio/lista-remedio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateRemedioComponent } from './components/remedio/update-remedio/update-remedio.component';
import { DeleteRemedioComponent } from './components/remedio/delete-remedio/delete-remedio.component';
import { DeletePacienteComponent } from './components/paciente/delete-paciente/delete-paciente.component';
import { UpdatePacienteComponent } from './components/paciente/update-paciente/update-paciente.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CadastroPacienteComponent,
    CadastroRemedioComponent,
    ListaPacienteComponent,
    ListaRemedioComponent,
    UpdateRemedioComponent,
    DeleteRemedioComponent,
    DeletePacienteComponent,
    UpdatePacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
