import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() image: any;

  onLikeClick(event){
    alert("Thank you for the like! Cuddles?")
    console.log(event)
  }

  onShareClick(event){
    alert("Thank you for sharing! Do you have any food?")
    console.log(event)
  }
}

