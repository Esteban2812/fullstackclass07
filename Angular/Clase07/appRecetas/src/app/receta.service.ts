import { IReceta } from "./receta.interface";
import { LogService } from "./log.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable({
	"providedIn": "root"
})
export class RecetaService implements Resolve<IReceta[]> {
	private recetas: Array<IReceta> = []

	constructor(private logService: LogService) { }

resolve():IReceta[] | Promise<IReceta[]> {
    const promesaReceta: Promise<IReceta[]> = new Promise((res, rej) => {
    setTimeout(()=>{
      res(
        [{
          titulo: "causa nortena", preparacion: "Sancochar la papa", ingredientes: "papa,aji,atun",tiempo: 20
        }]
      )
    },7000
    )
  })
  return promesaReceta;
}

	agregarReceta(receta: IReceta) {
		this.recetas.push(receta)
		this.logService.escribir("nueva receta", "info")
	}

	listarRecetas() {
		this.logService.escribir("listar recetas", "error")
		return this.recetas
	}
}
