import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  attractions: CardComponent;

  constructor() {
    this.attractions = new CardComponent();
    this.attractions.chooseRandomSources();
  }

  ngOnInit(): void {
  }

}
