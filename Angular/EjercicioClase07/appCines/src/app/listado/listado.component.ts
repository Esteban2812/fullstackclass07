import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../imovie';
import { CineService } from '../cine.service';
//import { LogService } from '../log.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	//@Input("listadoRecetas") recetas: Array<IReceta>

	recetas: Array<IMovie>

	constructor(private cineService: CineService, private router: Router,private activatedRoute: ActivatedRoute/*, private logService: LogService*/) { }

	ngOnInit() {
    console.log( this.activatedRoute.snapshot.data.datos)

		//this.recetas = this.recetaService.listarRecetas()
		//this.logService.escribir("Lista recetas", "info")
	}

	nuevaReceta() {
		this.router.navigate(["recetas", "nuevo"])
	}

}
