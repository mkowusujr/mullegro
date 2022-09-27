import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListPageComponent } from './transactions-list-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TransactionsListPageComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class TransactionsListPageModule { }
