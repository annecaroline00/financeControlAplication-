import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OperationSummary } from './operation-summary';

@Injectable({
  providedIn: 'root'
})
export class OperationSummaryService {

  getOperationSummary(): Observable<OperationSummary[]> {
    return of([
      { title: "Média mínima de vendas", value: 9465, isIncrease: true, color: "primary", percentValue: 0.5383, icon: "payments", isCurrency: true },
      { title: "Média mínima de compras", value: 465, isIncrease: false, color: "accent", percentValue: 0.2544, icon: "local_atm", isCurrency: true },
      { title: "Média máxima de vendas", value: 243, isIncrease: true, color: "warn", percentValue: 0.4565, icon: "shopping_cart", isCurrency: false },
      { title: "Média máxima de compras", value: 35, isIncrease: false, color: "primary", percentValue: 0.8361, icon: "portrait", isCurrency: false }
    ]);
  }

  constructor() { }
}
