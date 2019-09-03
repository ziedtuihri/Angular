import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService extends DataService {

  constructor(httpClient: HttpClient) {

    super('http://localhost:8081/categories' ,httpClient);

  }
}
