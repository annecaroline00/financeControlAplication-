import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationCreateComponent } from './components/operation/operation-create/operation-create.component';
import { OperationDeleteComponent } from './components/operation/operation-delete/operation-delete.component';
import { OperationDetailComponent } from './components/operation/operation-detail/operation-detail.component';
import { OperationUpdateComponent } from './components/operation/operation-update/operation-update.component';
import { OperationCrudComponent } from './views/operation/operation-crud/operation-crud.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'operations'
  },
  {
    path: "operations",
    component: OperationCrudComponent
  },
  {
    path: "operations/create",
    component: OperationCreateComponent
  },
  {
    path: "operations/update/:id",
    component: OperationUpdateComponent
  },
  {
    path: "operations/detail/:id",
    component: OperationDetailComponent
  },
  {
    path: "operations/delete/:id",
    component: OperationDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
