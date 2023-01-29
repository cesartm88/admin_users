import {Observable} from 'rxjs';

export class ItemListComponent<T>{

  private items$: Observable<T> [] = [];

  getItemsList(): Observable<T> []{
    return this.items$;
  }

  setItemsList(items: Observable<T> []){
    this.items$ = items;
  }
}
