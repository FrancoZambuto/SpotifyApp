import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel-categories.component.html',
  styleUrls: ['./carousel-categories.component.css']
})
export class CarouselCategoriesComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
