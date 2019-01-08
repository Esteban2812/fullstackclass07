import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class LogService {
	escribir(mensaje, tipo) {
		switch (tipo) {
			case "info":
				console.log("%c " + mensaje, "color:blue")
				break
			case "error":
				console.log("%c " + mensaje, "color: red")
				break
		}
	}
}