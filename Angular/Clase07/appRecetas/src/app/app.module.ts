import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { RecetaService } from './receta.service';
import { LogService } from './log.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route } from '@angular/router'
import { AuthGuard } from './auth.guard';
import { GuardadoGuard } from './guardado.guard';
import { FormsModule } from "@angular/forms"


const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{
		path: "recetas", canActivateChild: [AuthGuard], children: [
			{ path: "", component: ListadoComponent, resolve:{
        datos:RecetaService
      } },
			{ path: "nuevo", component: FormularioComponent, canActivate: [AuthGuard], canDeactivate: [GuardadoGuard] }
		]
	}
	/* 	{ path: "recetas", component: ListadoComponent },
		{ path: "recetas/nuevo", component: FormularioComponent } */
	/* 	{
			path: "recetas", component: ListadoComponent, children: [
				{ path: "", component: ListadoComponent },
				{ path: "nuevo", component: FormularioComponent }
			]
		} */
]

@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
