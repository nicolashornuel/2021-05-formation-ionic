import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/model';
import { DevfestnantesService } from 'src/app/service/devfestnantes.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {

  sessions: Session[] = [];

  constructor(
    private devfestnantesService: DevfestnantesService,
    private router : Router) { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.devfestnantesService.getSessions().subscribe({
      next: data => {
        for (const key in data) {
          this.sessions.push(data[key]);
        }
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('Object Sessions done')
    });
  }

  showDetail(id:number) {
    this.router.navigate( ['folder/detail session'], {fragment: id.toString()});
  }

}


