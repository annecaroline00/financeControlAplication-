import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Operation } from '../operation.model';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations: Operation[] = [];
  displayedColumns = ['id', 'data', 'codigo', 'quantidade', 'valor_unitario', 'tipo_operacao', 'valor_parcial', 'corretagem', 'taxa', 'valor_final', 'action']

  constructor(private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.operationService.readAll().subscribe(ops => {
      this.operations = ops;
    })
  }

}
