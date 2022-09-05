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

}
