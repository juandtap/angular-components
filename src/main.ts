import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  //styleUrls:['./main.css'],
})
export class App {
  name = 'diego';
  title = 'Calculadora';
  contador = 0;
  a = 20;
  b = 10;
  c = 0;

  suma = 0;
  resta = 0;
  producto = 0;
  division = 0;

  calcular() {
    this.contador = this.contador + 1;
    console.log('calculando operaciones: ' + this.a+ ", "+this.b);
    // suma
    this.suma = (+this.a ) + (+this.b);
    //resta
    this.resta = this.a - this.b
    // producto
    this.producto = this.a *  this.b
    // division
    this.division = this.a / this.b
  }
}

bootstrapApplication(App);
