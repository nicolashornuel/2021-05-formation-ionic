import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  constructor() { }

  writeSecretFile = async (text:string) => {

    let date = new Date();
    let localDate = date.toLocaleDateString().split('/').reverse().join('.')
    let localTime = date.toLocaleTimeString().split(':').join('.')

    let res = await Filesystem.writeFile({
      path: `secrets/note_${localDate}_${localTime}.txt`,
      data: text,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    console.log(res)
  };

  readSecretFile = async () => {
    const contents = await Filesystem.readFile({
      path: 'file://DOCUMENTS/secrets',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  
    console.log('secrets:', contents);
  };

}