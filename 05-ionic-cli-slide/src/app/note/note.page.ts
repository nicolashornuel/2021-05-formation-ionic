import { Component, OnInit } from '@angular/core';
import { FileSystemService } from '../service/filesystem.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  constructor(private filesystemService: FileSystemService) { }

  ngOnInit() {
    this.listeNote();
  }

  listeNote() {
    this.filesystemService.readSecretFile();
  }

}
