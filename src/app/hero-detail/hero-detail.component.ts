import { Component, OnInit, Input } from '@angular/core';
//this imports the hero class
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 //this makes it to where i can use the input field with the hero class
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
