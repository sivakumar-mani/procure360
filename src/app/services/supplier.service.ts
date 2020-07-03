import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Supplier } from './Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiURL = "http://localhost:4500";

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.apiURL + '/supplier/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(Supplier): Observable<Supplier> {
    return this.httpClient.post<Supplier>(this.apiURL + '/supplier/', JSON.stringify(Supplier), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(applicationno): Observable<Supplier> {
    return this.httpClient.get<Supplier>(this.apiURL + '/supplier/' + applicationno)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
   
  update(applicationno, Supplier): Observable<Supplier> {
    return this.httpClient.put<Supplier>(this.apiURL + '/supplier/' + applicationno, JSON.stringify(Supplier), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(applicationno){
    return this.httpClient.delete<Supplier>(this.apiURL + '/supplier/' + applicationno, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
