import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

    // // emit (1, 2, 3, 4, 5)
    // const source = from([1, 2, 3, 4, 5]);
    // // filter out non-even numbers
    // const example = source.pipe(filter(num => num % 2 === 0));
    // example.subscribe(res => {
    //   console.log(`Even number : ${res}`);
    // })

    // 1 2 3 o/p 2, 3, 4
    const obs = of(1, 2, 3).pipe(
      map(x => x + 1)
    ).subscribe(res => {
      console.log('obs of', res);
    })
  }

  CreatePost() {
    this.firebaseService.createPosts().subscribe(res => {
      console.log('Firebase post', res);      
    });
  }

  GetData() {
    // this.firebaseService.getPostDataFirebase().subscribe(res => {
    //   console.log('Firebase get', res);
    // })
    this.firebaseService.getPostDataFirebase().pipe(
      map(responseData => {
        console.log('before manipulate', responseData)
        // empty array 
        const postArray = [];
        // for in loop 
        for(const key in responseData) {
          // check the key 
          if(responseData.hasOwnProperty(key)) {
            // push new value into array 
            postArray.push({...responseData[key], id:key})
          }
        }
        return postArray;
      })
    ).subscribe(res => {
      console.log('after manipulate data', res);
    })
  }

}
