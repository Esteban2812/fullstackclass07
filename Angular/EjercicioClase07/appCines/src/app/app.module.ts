import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component'
import { CineService } from './cine.service';
import { AutenticadoService } from './autenticado.service';

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{
		path: "cines", children: [
			{ path: "", component: ListadoComponent, resolve:{
        datos:AutenticadoService
      } },
			{ path: "nuevo", component: FormularioComponent }
		]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
