import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from 'src/app/model';
import { DevfestnantesService } from 'src/app/service/devfestnantes.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent implements OnInit {

  speakers: Speaker[] = [];

  constructor(
    private devfestnantesService: DevfestnantesService,
    private router : Router) { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.devfestnantesService.getSpeakers().subscribe({
      next: data => {
        for (const key in data) {
          this.speakers.push(data[key]);
        }
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('Object Speakers done')
    });
  }

  showDetail(id:number) {
    this.router.navigate( ['folder/detail speaker'], {fragment: id.toString()});
  }

}