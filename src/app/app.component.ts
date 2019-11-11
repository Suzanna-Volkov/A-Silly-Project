import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Silly Project';

  theChoice: string = "";
  choices: string[] = ['Cats', 'Dogs', 'Neither'];

  catUrl = 'https://api.thecatapi.com/v1/images/search?limit=3'
  dogUrl = 'https://api.thedogapi.com/v1/images/search?limit=3'

  cats = fetch(this.catUrl)
    .then((res) => res.json());

  dogs = fetch(this.dogUrl)
    .then((res) => res.json());

  onRefresh(){
    this.cats = fetch(this.catUrl)
      .then((res) => res.json());

    this.dogs = fetch(this.dogUrl)
      .then((res) => res.json());
  }
}
