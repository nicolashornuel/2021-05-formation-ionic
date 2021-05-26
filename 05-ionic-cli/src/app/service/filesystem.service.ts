import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  constructor() { }

  writeSecretFile = async () => {
    let res = await Filesystem.writeFile({
      path: 'secrets/monfichierpersotext.txt',
      data: "This is a test",
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    console.log(res)
  };

}