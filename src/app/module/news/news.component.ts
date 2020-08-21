import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  list: any = [];


  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push(`这是滴${i + 1}条数据`);
    }
    console.log(this.list);
  }

}
