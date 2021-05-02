import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { ContadorComponent } from '../contador/contador.component';

@Component({
  selector: 'app-listadovillanos',
  templateUrl: './listadovillanos.component.html',
  styleUrls: ['./listadovillanos.component.css']
})
export class ListadovillanosComponent{


  villanos: String[] = ['Venom','Joker', 'Thanos', 'Black Goku', 'Harley Quinn'];


}
