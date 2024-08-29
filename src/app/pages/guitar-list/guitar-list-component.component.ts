import { Component, OnInit } from '@angular/core';
import { GuitarApiService } from '../../service/guitar-api-service';
import { Producto } from '../../utils/productos'; // Importa la interfaz Producto

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list-component.component.html',
  styleUrls: ['./guitar-list-component.css']
})
export class GuitarListComponent implements OnInit {
  manufacturers: Producto[] = []; // Cambia any[] por Producto[]
  errorMessage: string = '';

  constructor(private guitarApiService: GuitarApiService) { }

  ngOnInit(): void {
    this.guitarApiService.getManufacturers().subscribe(
      (data: Producto[]) => { // Aquí estás recibiendo un arreglo de productos
        this.manufacturers = data;
      },
      error => {
        this.errorMessage = error;
        console.error('Error al obtener fabricantes:', error);
      }
    );
  }
}
