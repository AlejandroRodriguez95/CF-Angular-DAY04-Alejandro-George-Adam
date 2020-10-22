import { Component, OnInit } from '@angular/core';
import { poster } from '../blogLogic';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  poster = poster;
  constructor() { }

  ngOnInit(): void {
    console.table(poster);
  }

}
