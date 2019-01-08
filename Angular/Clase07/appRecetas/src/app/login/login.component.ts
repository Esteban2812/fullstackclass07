import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private seguridadService: SeguridadService) { }

	ngOnInit() {
	}

	ingresar() {
		this.seguridadService.login()
	}

}
