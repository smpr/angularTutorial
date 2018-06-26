import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//imported in so that it can be used for form editing
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//imported in so that it can be added to the ngmodule
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    //makes sure that the module is usable by the rest of the app
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    //when you are wanting to use formsModule this has to be manually put it
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
