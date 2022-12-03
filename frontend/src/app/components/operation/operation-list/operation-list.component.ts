import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from "@angular/router";
import { Operation } from '../operation.model';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  dataLength: number;
  pageIndex: number = 0;
  pageSize: number = 5;
  operations: Operation[] = [];
  displayedColumns = ['data', 'codigo', 'quantidade', 'valor_unitario', 'tipo_operacao', 'valor_parcial', 'corretagem', 'taxa', 'valor_final', 'action']

  constructor(private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getServerData(null);

    this.operationService.getOperationCountAll().subscribe({
      next: operationCount => {
        this.dataLength = operationCount;
      }
    });

  }

  public getServerData(event?:PageEvent){
    if (event != null) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.dataLength = event.length;
    }
    return this.operationService.readAll(
      this.pageIndex * this.pageSize, this.pageSize)
      .subscribe((operations) => {
        this.operations = operations;
      });
  }

}
