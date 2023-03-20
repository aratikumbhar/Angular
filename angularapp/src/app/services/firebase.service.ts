import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://angular2023-26386-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) { }

  createPosts() {
    let postData = {
      title: 'This is firebase example',
      content: 'We are calling angular post method'
    }
   return this.httpClient.post(this.url + 'posts.json', postData);
   }

   getPostDataFirebase() {
    return this.httpClient.get(this.url + 'posts.json');
   }

}
