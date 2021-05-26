import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/model';
import { DevfestnantesService } from 'src/app/service/devfestnantes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(private devfestnantesService: DevfestnantesService,
    private router : Router) { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.devfestnantesService.getSchedule().subscribe({
      next: data => this.schedules = data,
      error: (error: any) => console.log(error),
      complete: () => console.log('Array Schedules done')
    });
  }

  openSession(session) {
    this.router.navigate( ['folder/detail session'], {fragment: session[0].toString()});
    // <a routerLink="../session" fragment={{session}}></a>
  }


}
