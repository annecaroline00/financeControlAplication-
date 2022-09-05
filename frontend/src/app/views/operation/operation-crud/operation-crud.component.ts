import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation-crud',
  templateUrl: './operation-crud.component.html',
  styleUrls: ['./operation-crud.component.css']
})
export class OperationCrudComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToOperationCreate(): void {
    this.router.navigate(['/operations/create'])
  }

}
