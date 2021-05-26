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
    this.devfestnantesService.listerSessions().subscribe(data => this.sessions = data);
  }

  showDetail(id:number) {
    this.router.navigate( ['folder/detail session'], {fragment: id.toString()});
  }

}


