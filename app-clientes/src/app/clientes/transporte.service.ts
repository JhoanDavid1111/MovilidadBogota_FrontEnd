import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransporteService {

constructor(private http: HttpClient) {}

getTransporte(url: string) {
  return this.http.get(url)
}

}
