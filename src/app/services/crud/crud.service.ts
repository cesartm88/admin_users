import { Injectable } from '@angular/core';
import { crudModel  } from '../../class/crud.asbtract';
import { LocalStorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CRUDService extends crudModel {
  constructor(private storage: LocalStorageService) {
    super();
  }

  connect() {
  }

  saveItem(key, value) {
      this.storage.set(key, value);
  }

  editItem() {
  }

  deleteItem() {
  }

  readItem() {
  }

  listAll() {
  }
}
