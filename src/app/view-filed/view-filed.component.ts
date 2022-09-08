import { Component, OnInit } from '@angular/core';
import { GrievanceService } from '../services/grievance-service.service';

@Component({
  selector: 'app-view-filed',
  templateUrl: './view-filed.component.html',
  styleUrls: ['./view-filed.component.scss'],
})
export class ViewFiledComponent implements OnInit {
  allGrievance: any[] = [];
  grievancesLoaded = false;
  constructor(private grievanceService: GrievanceService) {}

  ngOnInit(): void {
    this.grievanceService.getAllGrievance().subscribe((data) => {
      this.allGrievance = data;
      this.grievancesLoaded = true;
    });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
