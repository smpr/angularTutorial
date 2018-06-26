import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//imports all of the hard written data from the mock-heroes
// import { HEROES } from '../mock-heroes';
//this brings in the HeroService so that it can be injected in later down
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //makes heroes the same as HEROES that is imported from the moc-heroes component
   heroes: Hero[];
  // this is for the onclick event when selecting a hero
  selectedHero: Hero;

 
  constructor(private heroService: HeroService) { }

 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}