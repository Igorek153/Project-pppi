import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface ProductStorage {
  id: number;
  area: number;
  category: string;
  name: string;
  security: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  baseUrl = 'http://localhost/api/';
  storages = [];
  products = [];
  users = [];

  constructor(private http: HttpClient) { }

  private userName = '';
  private token = '';
  
  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login',
    user);
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  setToken(token: string) {
    this.token = token;
  }

  getStorages() {
    return this.http.get<any>(this.baseUrl + 
    '?action=get-storages&token=' + this.token);
  }

  addStorage(storage) {
    return this.http.post<any>(
      this.baseUrl + '?action=add_storage&token=' + this.token, storage
    );
  }

  deleteStorage(storage) {
    return this.http.post<any>(
      this.baseUrl + '?action=del_storage&token=' + this.token, storage
    );
  }

  editStorage(storage) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit_storage&token=' + this.token, storage
    );
  }

  
  getProducts(id: number) {
    return this.http.get<any>(
      this.baseUrl + `?action=get-products&storage=${id}&token=${this.token}`
    );
  };



}
