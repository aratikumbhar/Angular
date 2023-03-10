import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {


  arr1:any = [];

  constructor(private route: ActivatedRoute, private demoService: DemoService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.demoService.getUsers().subscribe(res=>{
      console.log(res);      
      this.arr1 = res;
    });
   
  }
}
