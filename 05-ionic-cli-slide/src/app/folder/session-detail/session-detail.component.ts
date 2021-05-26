import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Session, Speaker } from 'src/app/model';
import { DevfestnantesService } from 'src/app/service/devfestnantes.service';
import { FileSystemService } from 'src/app/service/filesystem.service';
import { ModalNoteComponent } from '../modal-note/modal-note.component';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss'],
})
export class SessionDetailComponent implements OnInit {

  loading: boolean = true;
  session: Session;
  speakers: Speaker[] = [];

  constructor(
    private devfestnantesService: DevfestnantesService,
    private route: ActivatedRoute,
    private router : Router,
    public modalController: ModalController) { }

  ngOnInit() {
    this.checkRoute();
  }

  checkRoute() {
    this.route.fragment.subscribe(fragment => this.initializeOnly(fragment));
  }

  initializeOnly(fragment:string) {
    this.devfestnantesService.getSessions().toPromise()
    .then(data => {
      for (const key in data) {
        key==fragment ? this.session = data[key] : null;
      }
    });
    this.devfestnantesService.getSpeakers().toPromise()
    .then(data => {
      if (this.session.speakers) {
        for (const key in data) {
          this.session.speakers.forEach(speaker => {
            +key==speaker ? this.speakers.push(data[key]) : null;
          })
        }
      } else {
        this.speakers = [];
      }

      this.loading = false;
    });
  }

  openSpeaker(id:number) {
    this.router.navigate( ['folder/detail speaker'], {fragment: id.toString()});
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalNoteComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
