import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  title = 'Nivel de Poder';
  numero = 10;
  base = 1;

  constructor() { }

  ngOnInit(): void {
  }

  acumular(valor: number){
    this.numero += valor;
  }

}
