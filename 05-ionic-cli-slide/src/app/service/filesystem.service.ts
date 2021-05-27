import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Storage } from '@ionic/storage-angular';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  private _storage: Storage | null = null;
  private storageCache: any[] = [];


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(value: any) {
    let date = new Date();
    let localDate = date.toLocaleDateString().split('/').reverse().join('.')
    let localTime = date.toLocaleTimeString().split(':').join('.')
    let key = `note_${localDate}_${localTime}`
    this._storage?.set(key, value);
  }

  async get() {
    if (!this._storage) {
      await this.init();
      this._storage?.forEach((key, value, index) => {
        this.storageCache.push(key, value)
      });
    } else {
    this._storage?.forEach((key, value, index) => {
      this.storageCache.push(key, value)
    });
    return this.storageCache;
  }
}



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