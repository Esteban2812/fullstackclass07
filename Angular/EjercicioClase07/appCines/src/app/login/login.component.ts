import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../seguridad.service';
import { AutenticadoService } from '../autenticado.service'


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private seguridadService: SeguridadService,private auth:AutenticadoService, private router:Router) { }

	ngOnInit() {
	}

	ingresar() {
		this.seguridadService.login()
  }

  loguarse(){
    this.auth.login()
    .then(
      data => {
        sessionStorage.setItem("datosUsuario", JSON.stringify(data))
        this.router.navigate(["listado"])
      }
    )

  }

}
