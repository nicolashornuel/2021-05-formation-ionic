import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

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
      await this._storage?.forEach((content, name) => {
        this.storageCache.push({key:name,value:content})
      });
      return this.storageCache;
    } else {
      this.storageCache = [];
      await this._storage?.forEach((content, name) => {
        this.storageCache.push({key:name,value:content})
      });
      return this.storageCache;
    }
  }

}