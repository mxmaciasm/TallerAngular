import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  

  title='Bienvenido Taller de Mervyn';
  users=['Mervyn', 'Jenifer'];
  autos=['Chevrolet', 'Kia', 'Hyundai'];

  title1 = 'HELLO WORD';
  title2 = 'Ecuador';
  title3 = 'Quito';

  //Eventos
  presentar(nombre: string){
  		console.info(nombre);
  		alert(nombre);
  }
  cambiar(nombre: string){
  	 this.title3 = nombre;
  	 alert(nombre);
  }

  sayHello(){
    alert("Hola");
  }

  eliminaAutos(auto: string){
    for (let index = 0; index < this.autos.length; index++) {
      if(auto == this.autos[index]){
        var variable = this.autos.splice(index, 1);
        alert(variable);
      }
      
    }
  }

  adicionarAuto(nombre: string){
    var result = this.autos.push(nombre);
    alert(result);
    
    return false; //con return false no viaja al servidor y se queda en la pagina sin refrescar.
  }

  name: string = 'MuchoLote2';
  age: number = 0; //puede estar asigado o inicializado en el constructor.
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];


  constructor() {
    this.age = 40;
    this.address = {
      street : 'Narcisa de Jesus',
      city : 'Guayaquil'
    };
    this.hobbies = ['Natacion', 'leer', 'escribir'];

   }

  ngOnInit(): void {
  }

}
