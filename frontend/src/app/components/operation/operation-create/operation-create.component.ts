import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from '../operation.service';
import { Operation } from './../operation.model';

@Component({
  selector: 'app-operation-create',
  templateUrl: './operation-create.component.html',
  styleUrls: ['./operation-create.component.css']
})
export class OperationCreateComponent implements OnInit {

  operation: Operation = {data: new Date(), codigo: '', quantidade: null, valor_unitario: null, tipo_operacao: '', valor_parcial: null, corretagem: null, taxa: null, valor_final: null};

  constructor(private operationService: OperationService, private router: Router) { }

  ngOnInit(): void {
  }

  createOperation(): void {
    this.operationService.create(this.operation).subscribe(op => {
      this.operationService.showMessage('Operação criada com sucesso');
      this.router.navigate(['/operations']);
    });
  }

  cancel(): void{
    this.router.navigate(['/operations']);
  }

  onRadioButtonClicked(tipoOperacaoSelecionado: string) {
    this.operation.tipo_operacao = tipoOperacaoSelecionado;
  }

  camposValidados() {
    return (this.operation.tipo_operacao.toUpperCase() == 'COMPRA' || this.operation.tipo_operacao.toUpperCase() == 'VENDA')
    && (this.operation.quantidade != null) &&  (this.operation.corretagem != null) &&  (this.operation.codigo != null)
    && (this.operation.valor_unitario != null);
  }

}
