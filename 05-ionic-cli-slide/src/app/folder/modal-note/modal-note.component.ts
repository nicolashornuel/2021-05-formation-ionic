import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, ModalController, ToastController } from '@ionic/angular';
import { Session, Speaker } from 'src/app/model';
import { CameraService } from 'src/app/service/camera.service';
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
  myImage: string = null;

  constructor(
    private filesystemService: FileSystemService,
    private cameraService: CameraService,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() { }

  makeSomeNote() {
    let value = this.input.value + "_src_" + this.myImage;
    console.log(value)
    this.filesystemService.set(value);
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

  takePicture() {
    this.cameraService.takePicture().then(res => this.myImage = res);
  }
  
}
