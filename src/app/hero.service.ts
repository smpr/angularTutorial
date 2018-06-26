import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  //this grabs the heroes based on the hero clicked
  getHeroes(): Observable<Hero[]> {
    //sends a message to message service
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
