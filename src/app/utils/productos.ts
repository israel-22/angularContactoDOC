export interface Productos{
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    tipo: number;
}
export interface Producto {
    id: string;
    name: string;
    formerlyCalled?: string;  // Puede ser opcional si no siempre está presente
    foundedYear: number;
    foundedPlace: string;
    founder: string;
    headquarters: string;
    areaServed: string;
    website: string;
    logoBase64: string;
  }