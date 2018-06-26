import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//imports all of the hard written data from the mock-heroes
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //makes heroes the same as HEROES that is imported from the moc-heroes component
  heroes = HEROES;
  // this is for the onclick event when selecting a hero
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}