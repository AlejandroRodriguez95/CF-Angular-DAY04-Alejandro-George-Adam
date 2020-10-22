import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { poster } from '../blogLogic'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.post = poster[+params.get('name')];
    });
  }

}
