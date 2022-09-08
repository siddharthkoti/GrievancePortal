import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrievanceService } from '../services/grievance-service.service';

@Component({
  selector: 'app-grievance-detail',
  templateUrl: './grievance-detail.component.html',
  styleUrls: ['./grievance-detail.component.scss'],
})
export class GrievanceDetailComponent implements OnInit {
  grievanceId: number = 0;
  grievComments: any = [];
  grievDetail: any = {};
  commentsLoaded = false;
  detailLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private grievanceService: GrievanceService
  ) {}

  ngOnInit(): void {
    this.grievanceId = +this.route.snapshot.params['id'];

    this.grievanceService
      .getGrievanceComments(this.grievanceId)
      .subscribe((data: any) => {
        this.grievComments = data;
        this.commentsLoaded = true;
      });

    this.grievanceService
      .getGrievanceDetail(this.grievanceId)
      .subscribe((data: any) => {
        this.grievDetail = data;
        this.detailLoaded = true;
      });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
