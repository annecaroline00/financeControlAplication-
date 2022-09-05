import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Operation } from './operation.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  baseURL = "http://localhost:8000/api/v1/operations";

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000
    })
  }

  readAll(): Observable<Operation[]> {
    return this.httpClient.get<Operation[]>(this.baseURL);
  }

  readById(id: string): Observable<Operation> {
    const prodIdUrl = `${this.baseURL}/${id}`;
    return this.httpClient.get<Operation>(prodIdUrl);
  }

  update(op: Operation): Observable<Operation> {
    op.data = new Date();
    const prodIdUrl = `${this.baseURL}/${op.id}`;
    return this.httpClient.put<Operation>(prodIdUrl, op);
  }

  delete(id: string): Observable<Operation>{
    const opIdUrl = `${this.baseURL}/${id}`;
    return this.httpClient.delete<Operation>(opIdUrl);
  }

  create(operation: Operation): Observable<Operation> {
    return this.httpClient.post<Operation>(this.baseURL, operation);
  }
}
