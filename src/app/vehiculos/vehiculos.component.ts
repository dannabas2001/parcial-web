import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { GetDataService } from '../services/get-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
  imports: [CommonModule]
})
export class VehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  conteoMarcas: { [marca: string]: number } = {};
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getData().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.vehiculos = data;
        this.conteoMarcas
      },
      error: (error) => {
        console.error('Error al obtener datos', error);
      },
    });

}
contarMarcas() {
  this.conteoMarcas={}
  for(let v of this.vehiculos){
 if (this.conteoMarcas[v.marca]) {
        this.conteoMarcas[v.marca]++;
      } else {
        this.conteoMarcas[v.marca] = 1;
  }
  throw new Error('Function not implemented.');
}

}
}

