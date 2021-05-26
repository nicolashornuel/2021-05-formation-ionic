import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ScheduleComponent } from './schedule/schedule.component'
import { SessionComponent } from './session/session.component'
import { SpeakerComponent } from './speaker/speaker.component'
import { SessionDetailComponent } from './session-detail/session-detail.component'
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component'
import { ModalNoteComponent } from './modal-note/modal-note.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    ScheduleComponent,
    SessionComponent,
    SpeakerComponent,
    SessionDetailComponent,
    SpeakerDetailComponent,
    ModalNoteComponent
  ]
})
export class FolderPageModule {}
