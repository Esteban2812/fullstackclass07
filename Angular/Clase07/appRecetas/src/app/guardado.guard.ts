import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ICanDeactivate } from './can-deactivate.interface';


@Injectable({
	providedIn: 'root'
})
export class GuardadoGuard implements CanDeactivate<ICanDeactivate> {

	canDeactivate(componente: ICanDeactivate): boolean {
		if (componente.canDeactivateComponente()) {
			if (confirm("Hay data no salvada, quieres salvarla?")) {
				return false
			}
			return true
		}

		return true
	}
}
