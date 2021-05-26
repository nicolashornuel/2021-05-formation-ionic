import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Session, Speaker } from 'src/app/model';
import { DevfestnantesService } from 'src/app/service/devfestnantes.service';
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
    private router: Router,
    public modalController: ModalController) { }

  ngOnInit() {
    this.checkRoute();
  }

  checkRoute() {
    this.route.fragment.subscribe(fragment => this.initializeOnly(fragment));
  }

  initializeOnly(fragment: string) {
    const sessions$ = this.devfestnantesService.getSessions().toPromise()
    const speakers$ = this.devfestnantesService.getSpeakers().toPromise()
    Promise.all([sessions$, speakers$]).then(data => {
      const listSession = data[0];
      const listSpeaker = data[1];
      for (const key in listSession) {
        key == fragment ? this.session = listSession[key] : null;
      }
      if (this.session.speakers) {
        for (const key in listSpeaker) {
          this.session.speakers.forEach(speaker => {
            +key == speaker ? this.speakers.push(listSpeaker[key]) : null;
          })
        }
      } else {
        this.speakers = [];
      }
      this.loading = false;
    }
    )
  }

  openSpeaker(id: number) {
    this.router.navigate(['folder/detail speaker'], { fragment: id.toString() });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalNoteComponent,
      componentProps: {
        'session': this.session,
        'speakers': this.speakers
      }
    });
    return await modal.present();
  }

}
