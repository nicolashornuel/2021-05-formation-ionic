import { Component, OnInit } from '@angular/core';
import { FileSystemService } from '../service/filesystem.service';

interface Note {
  key: string,
  value: string
}

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  notes: Note[] = [];

  constructor(private filesystemService: FileSystemService) { }

  ngOnInit() {
    this.listeNote();
  }

  listeNote() {
    this.filesystemService.get().then(array => {
      this.notes = array
      console.log(array)
    });
  }

}
