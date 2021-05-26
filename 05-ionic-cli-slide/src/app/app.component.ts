import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Schedule', url: '/folder/schedule', icon: 'calendar-number' },
    { title: 'Session', url: '/folder/session', icon: 'alarm' },
    { title: 'Speaker', url: '/folder/speaker', icon: 'people-circle' },
    { title: 'Note', url: '/note', icon: 'document' },
  ];

  constructor() { }

}

