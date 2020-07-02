import { Component } from '@angular/core';
import {Card} from './cards'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  

  card1 = new Card("Free", 0, 1,5, 1, 1, 1, 0, 0, 0,0)
  card2 = new Card("Plus", 9, 5,50, 1, 1, 1, 1, 1, 0,0 )
  card3 = new Card("Pro", 49, 100,150, 1, 1, 1, 1, 1, 1,1 )
  cards = [
    this.card1,this.card2, this.card3
  ]
 


}
