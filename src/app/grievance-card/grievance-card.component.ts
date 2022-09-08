import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grievance-card',
  templateUrl: './grievance-card.component.html',
  styleUrls: ['./grievance-card.component.scss']
})
export class GrievanceCardComponent implements OnInit {

  @Input() grievance: any;
  constructor() { }

  ngOnInit(): void {
  }

}
