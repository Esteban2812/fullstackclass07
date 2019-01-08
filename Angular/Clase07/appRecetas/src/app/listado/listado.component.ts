import { Component, OnInit, Input } from '@angular/core';
import { IReceta } from '../receta.interface';
import { RecetaService } from '../receta.service';
import { LogService } from '../log.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	//@Input("listadoRecetas") recetas: Array<IReceta>

	recetas: Array<IReceta>

	constructor(private recetaService: RecetaService, private router: Router,private activatedRoute: ActivatedRoute/*, private logService: LogService*/) { }

	ngOnInit() {
    this.recetas = this.activatedRoute.snapshot.data.datos

		//this.recetas = this.recetaService.listarRecetas()
		//this.logService.escribir("Lista recetas", "info")
	}

	nuevaReceta() {
		this.router.navigate(["recetas", "nuevo"])
	}

}
