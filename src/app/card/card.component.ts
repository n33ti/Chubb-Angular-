import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('title') title;
  @Input('users') users;
  @Input('storage') storage;
  @Input('price') price;
  @Input('publicProjects') publicProjects
  @Input('communityAccess') communityAccess
  @Input('privateProjects') privateProjects
  @Input('freeSubDomains') freeSubDomains
  @Input('phoneSupport') phoneSupport
  @Input('monthlyStatus') monthlyStatus
  @Input('ud') ud;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ud)
  }

}
