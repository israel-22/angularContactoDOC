import { Component, OnInit } from '@angular/core';
import { GuitarApiService } from './guitar-api.service';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {
  manufacturers: any[] = [];
  errorMessage: string = '';

  constructor(private guitarApiService: GuitarApiService) { }

  ngOnInit(): void {
    this.guitarApiService.getManufacturers().subscribe(
      data => {
        this.manufacturers = data;
      },
      error => {
        this.errorMessage = error;
        console.error('Error al obtener fabricantes:', error);
      }
    );
  }
}
