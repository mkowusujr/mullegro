import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionPageComponent } from './transaction-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TransactionPageComponent],
  imports: [CommonModule, RouterModule]
})
export class TransactionPageModule {}
