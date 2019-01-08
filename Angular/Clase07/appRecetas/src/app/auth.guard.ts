import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { SeguridadService } from "./seguridad.service";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private seguridadService: SeguridadService, private router: Router) { }

	canActivate(): boolean {
		if (this.seguridadService.estaLogueado()) {
			return true
		}
		this.router.navigate(["/"])
		return false
	}

	canActivateChild(): boolean {
		return this.canActivate()
		//return this.seguridadService.estaLogueado()
	}
}