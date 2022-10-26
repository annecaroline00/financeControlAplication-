import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { OperationCreateComponent } from './components/operation/operation-create/operation-create.component';
import { OperationDeleteComponent } from './components/operation/operation-delete/operation-delete.component';
import { OperationDetailComponent } from './components/operation/operation-detail/operation-detail.component';
import { OperationListComponent } from './components/operation/operation-list/operation-list.component';
import { OperationUpdateComponent } from './components/operation/operation-update/operation-update.component';
import { NavComponent } from './nav/nav.component';
import { OperationCrudComponent } from './views/operation/operation-crud/operation-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationUpdateComponent,
    OperationListComponent,
    OperationDetailComponent,
    OperationDeleteComponent,
    OperationCreateComponent,
    OperationCrudComponent,
    LineChartComponent,
    CardComponent,
    NavComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    NgChartsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
