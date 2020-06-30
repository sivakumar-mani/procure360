import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Supplier } from './Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiServer = "http://localhost:5000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(Supplier): Observable<Supplier> {
    return this.httpClient.post<Supplier>(this.apiServer + '/Suppliers/', JSON.stringify(Supplier), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Supplier> {
    return this.httpClient.get<Supplier>(this.apiServer + '/Suppliers/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.apiServer + '/Suppliers/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, Supplier): Observable<Supplier> {
    return this.httpClient.put<Supplier>(this.apiServer + '/Suppliers/' + id, JSON.stringify(Supplier), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Supplier>(this.apiServer + '/Suppliers/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
