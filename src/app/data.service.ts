import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';/*
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequest } from './../common/bad-request-error';*/

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //constructor(private url: string, public httpClient: HttpClient) { }
  constructor(@Inject('API_BASE_URL') private url, public httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.url).pipe(catchError(this.handleError));
  }

  getOne(ressource){
    return this.httpClient.get(this.url + '/' + ressource).pipe(catchError(this.handleError));
  }

  create(ressource){
    return this.httpClient.post(this.url, JSON.stringify(ressource)).pipe(catchError(this.handleError));
  }

  update(ressource,oldRessource){
    return this.httpClient.put(this.url + '/' + oldRessource, JSON.stringify(ressource)).pipe(catchError(this.handleError));
  }

  delete(ressource){
    return this.httpClient.delete(this.url + '/' + ressource).pipe(catchError(this.handleError));
  }

  public handleError(err: Response){
    if (err.status == 400 ){
      return Observable.throw(new BadRequest(err));
    }

    if (err.status == 404) {
      return Observable.throw(new NotFoundError());
    }
    // Return error by default if no specific error
    return Observable.throw(new AppError(err));
  }
}
