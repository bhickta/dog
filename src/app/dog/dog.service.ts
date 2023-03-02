import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  url: string = 'https://dog.ceo/api/breeds/image/random/3';
  
  constructor(private http: HttpClient) { }
  
  getDogs(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }  
  
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage))
  }
}
