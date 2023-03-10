import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  getPostById(id: any) {
    throw new Error('Method not implemented.');
  }
  get(id: any) {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers () {
    return this.httpClient.get(this.apiUrl);
   }

}
