import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from '../operation.service';
import { Operation } from './../operation.model';

@Component({
  selector: 'app-operation-update',
  templateUrl: './operation-update.component.html',
  styleUrls: ['./operation-update.component.css']
})
export class OperationUpdateComponent implements OnInit {

  operation: Operation;

  constructor(
    private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.operationService.readById(id+'').subscribe((operation) => {
      this.operation = operation;
    });
  }

  updateOperation(): void {
    this.operationService.update(this.operation).subscribe(() => {
      this.operationService.showMessage("Operação atualizada com sucesso!");
      this.router.navigate(["/operations"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/operations"]);
  }

}
