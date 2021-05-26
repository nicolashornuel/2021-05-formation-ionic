import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Speaker } from 'src/app/model';
import { DevfestnantesService } from 'src/app/service/devfestnantes.service';
import { ModalController } from '@ionic/angular';
import { ModalNoteComponent } from 'src/app/folder/modal-note/modal-note.component';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss'],
})
export class SpeakerDetailComponent implements OnInit {

  loading: boolean = true;
  speaker: Speaker;

  constructor(
    private devfestnantesService: DevfestnantesService,
    private route: ActivatedRoute,
    public modalController: ModalController) { }

  ngOnInit() {
    this.checkRoute();
  }

  checkRoute() {
    this.route.fragment.subscribe(fragment => this.initializeOnly(fragment));
  }

  initializeOnly(fragment: string) {
    this.devfestnantesService.getSpeakers().subscribe(data => {
        for (const key in data) {
          key == fragment ? this.speaker = data[key] : null;
        }
        this.loading = false;
      });
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
