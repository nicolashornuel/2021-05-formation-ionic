import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ScheduleComponent } from './schedule/schedule.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionComponent } from './session/session.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { SpeakerComponent } from './speaker/speaker.component';

const routes: Routes = [
  { path: '', component: FolderPage },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'session', component: SessionComponent },
  { path: 'detail session', component: SessionDetailComponent },
  { path: 'speaker', component: SpeakerComponent },
  { path: 'detail speaker', component: SpeakerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
