import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../utils/productos';

@Injectable({
  providedIn: 'root'
})
export class GuitarApiService {
  private apiUrl = 'https://guitar-api.herokuapp.com'; // URL de la API musica

  constructor(private http: HttpClient) { }

  getManufacturers(): Observable<Producto[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:1234')
    });
    return this.http.get<Producto[]>(`${this.apiUrl}/manufacturers`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Aquí puedes manejar el error como prefieras
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  // Añade otros métodos según sea necesario
}
