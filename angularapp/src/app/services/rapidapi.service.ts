import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';

  constructor(private httpClient: HttpClient) { }

  getFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '041624d4bfmsh429c10a2bd7e1fep145219jsn8b5caaaa4e41',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    });
   return this.httpClient.get(this.url, { headers: headers});
  }
}
