import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IMovie } from './imovie';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoService implements Resolve<any> {

  constructor() { }

  resolve(): any | Promise<any> {
    
    const promesaLocales = new Promise((res, rej) => {
    setTimeout(()=>{
      res(
        [{
          local: "Sur", cantidadSalas: 10
        }]
      )
    },3000
    )
  })

  const promesaDistritos = new Promise((res, rej)=> {
    setTimeout(()=>{
      res(
        {
          status:200,
          results: [
            {distrito: "San Miguel"},
            {distrito: "Surquillo"},
            {distrito: "Brena"}
          ]
        }
      )
    }
    )
  }
  )

  return promise.all([promesaLocales,promesaDistritos])


  //return promesaReceta;
}

  login():Promise<any>{
    return new Promise((res, rej) => {
      setTimeout(()=>{
        res({
          status: 200,
          results: [
            {usuario: "esteban",
             authenticationToken: "asdfjkh%55#4",
             refreshToken: "sdfa3d23#$"
            }
          ]
        })
      }
      )
    }
    )
  }

}
