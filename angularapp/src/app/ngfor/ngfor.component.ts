import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title: string = 'Top 3 Bollywood Movies';

  movies : Movie[] = [
    {title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2009'},
    {title: 'Tumbbad', director: 'Rahil', cast: 'Rahi', releaseDate: '2020'},
    {title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'}
  ]

  favSongs = ['Channa Ve', 'Tum Jo Aaye', 'Tu Hi Yaar Mera', 'Vaaste'];

 

  constructor() { }

  ngOnInit() {
  }

}
