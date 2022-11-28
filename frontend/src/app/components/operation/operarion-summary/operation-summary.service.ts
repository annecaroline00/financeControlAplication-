import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Operation } from '../operation.model';
import { OperationSummary } from './operation-summary';

@Injectable({
  providedIn: 'root'
})
export class OperationSummaryService {

  getOperationSummary(operations: Operation[]): Observable<OperationSummary[]> {
    const operationInfo = { mediaValorFinalCompra: 0, mediaValorFinalVenda: 0, maiorValorCompra: 0, maiorValorVenda: 0 };
    this.processaValores(operations, operationInfo);
    return of([
      { title: "Média de valor de compra", value: this.getRoundedNumber(operationInfo.mediaValorFinalCompra), trend: 1, color: "primary", percentValue: 0.5383, icon: "payments", isCurrency: true },
      { title: "Média de valor de venda", value: this.getRoundedNumber(operationInfo.mediaValorFinalVenda), trend: 1, color: "accent", percentValue: 0.2544, icon: "payments", isCurrency: true },
      { title: "Maior valor de compra", value: this.getRoundedNumber(operationInfo.maiorValorCompra), trend: -1, color: "warn", percentValue: 0.4565, icon: "payments", isCurrency: false },
      { title: "Maior valor de venda", value: this.getRoundedNumber(operationInfo.maiorValorVenda), trend: 0, color: "primary", percentValue: 0.8361, icon: "payments", isCurrency: false }
    ]);
  }

  constructor() { }

  processaValores(operations: Operation[], operationInfo: {mediaValorFinalCompra: number,
    mediaValorFinalVenda: number, maiorValorCompra: number, maiorValorVenda: number}): void {
    let sum_buy = 0, sum_sell = 0, amount_buy = 0, amount_sell = 0;
    for (var i in operations) {
      if (operations[i].tipo_operacao == 'COMPRA') {
        if (operations[i].valor_final > operationInfo.maiorValorCompra) {
          operationInfo.maiorValorCompra = operations[i].valor_final;
        }
        sum_buy += operations[i].valor_final;
        amount_buy ++;
      } else {
        if (operations[i].valor_final > operationInfo.maiorValorVenda) {
          operationInfo.maiorValorVenda = operations[i].valor_final;
        }
        sum_sell += operations[i].valor_final;
        amount_sell++;
      }
    }
    operationInfo.mediaValorFinalCompra = sum_buy / amount_buy;
    operationInfo.mediaValorFinalVenda = sum_sell / amount_sell;
  }

  getRoundedNumber(number: number): number {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }
}
