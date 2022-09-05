import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { OperationService } from '../operation.service';
import { Operation } from './../operation.model';

@Component({
  selector: 'app-operation-delete',
  templateUrl: './operation-delete.component.html',
  styleUrls: ['./operation-delete.component.css']
})
export class OperationDeleteComponent implements OnInit {

  operation: Operation;

  constructor(
    private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.operationService.readById(id+'').subscribe((op) => {
      this.operation = op;
    });
  }

  deleteOperation(): void {
    this.operationService.delete(this.operation.id+'').subscribe(() => {
      this.operationService.showMessage("Operação financeira excluida com sucesso!");
      this.router.navigate(["/operations"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/operations"]);
  }

}
