import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { OrdersRequest } from '../interfaces/OrdersResult.model';
import { OrdersUpcomingRequest } from '../interfaces/OrdersUpcommingResult.model';

const url_orders = environment.baseUrl + environment.orders;
const url_orders_upcoming = environment.baseUrl + environment.orders + environment.upcoming;

@Injectable({
  providedIn: 'root'
})
export class ServiceOrdersService {

  constructor(private _http: HttpClient) { }

  getOrders(): Observable<OrdersRequest>{
    return this._http.get<OrdersRequest>(`${url_orders}`);
  }

  getOrdersUpcomming(): Observable<OrdersUpcomingRequest>{
    return this._http.get<OrdersUpcomingRequest>(`${url_orders_upcoming}`);
  }
}
