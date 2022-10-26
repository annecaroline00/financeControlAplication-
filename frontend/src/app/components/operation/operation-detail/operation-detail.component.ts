import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { OperationService } from '../operation.service';
import { Operation } from './../operation.model';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {

  dataLength: number;
  pageIndex: number = 0;
  pageSize: number = 2;
  operations: Operation[] = [];
  displayedColumns = ['id', 'data', 'codigo', 'quantidade', 'valor_unitario', 'tipo_operacao', 'valor_parcial', 'corretagem', 'taxa', 'valor_final', 'action'];
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 3 },
        };
      }

     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 3 },
      };
    })
  );

  constructor(private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getServerData(null);
    this.operationService.getOperationCount(id+'').subscribe({
      next: operationCount => {
        this.dataLength = operationCount;
      }
    });
  }

  public getServerData(event?:PageEvent){
    const id = +this.route.snapshot.paramMap.get('id');

    if (event != null) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.dataLength = event.length;
    }

    return this.operationService.getOperationsByCodigo(id+'',
      this.pageIndex * this.pageSize,
      this.pageSize
      ).subscribe((operations) => {
        this.operations = operations;
      });
  }

  voltar(): void {
    this.router.navigate(["/operations"]);
  }

}
