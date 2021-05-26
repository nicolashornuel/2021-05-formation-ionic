import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, ModalController, ToastController } from '@ionic/angular';
import { Session, Speaker } from 'src/app/model';
import { FileSystemService } from 'src/app/service/filesystem.service';


@Component({
  selector: 'app-modal-note',
  templateUrl: './modal-note.component.html',
  styleUrls: ['./modal-note.component.scss'],
})
export class ModalNoteComponent implements OnInit {

  // Data passed in by componentProps
  @Input() session: Session
  @Input() speakers: Speaker[]
  @ViewChild('input') input: IonTextarea;


  constructor(
    private filesystemService: FileSystemService,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() { }

  makeSomeNote() {
    this.filesystemService.writeSecretFile(this.input.value);
    this.presentToast();
    
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your note have been saved.',
      duration: 2000
    });
    toast.present();
    this.dismiss();
  }

}
