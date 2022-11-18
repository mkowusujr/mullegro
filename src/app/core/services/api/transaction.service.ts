import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { ITransaction } from '../../interfaces/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = '/transactions';
  constructor(private _apiService: ApiService) {}

  getAllTransactions(): Observable<ITransaction[]> {
    let getAllTransactionsEndpoint = `${this.baseUrl}`;
    return this._apiService.getRequest(getAllTransactionsEndpoint);
  }

  getTransaction(transactionId: number): Observable<ITransaction> {
    let getTransactionEndpoint = `${this.baseUrl}/transaction/${transactionId}`;
    return this._apiService.getRequest(getTransactionEndpoint);
  }

  addTransaction(payload: object) {
    let addTransactionEndpoint = `${this.baseUrl}`;
    return this._apiService.postRequest(addTransactionEndpoint, payload);
  }
}
