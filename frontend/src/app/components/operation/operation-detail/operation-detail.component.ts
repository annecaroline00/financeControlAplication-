import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { OperationService } from '../operation.service';
import { Operation } from './../operation.model';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {

  operations: Operation[] = [];
  displayedColumns = ['id', 'data', 'codigo', 'quantidade', 'valor_unitario', 'tipo_operacao', 'valor_parcial', 'corretagem', 'taxa', 'valor_final', 'action']


  constructor(private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.operationService.readAllByCodigo(id+'').subscribe(ops => {
      this.operations = ops;
    })
  }

  voltar(): void {
    this.router.navigate(["/operations"]);
  }


}
