import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
//import { TransporteComponent } from './clientes/transporte.component';
import { TransporteService } from "./clientes/transporte.service";
import { FinalizarComponent } from './clientes/finalizar.component';




const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/finalizar', component: FinalizarComponent},
  //{path: 'clientes/transporte', component: TransporteComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ClientesComponent,
    FinalizarComponent
    //TransporteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
