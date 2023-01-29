import {Observable} from 'rxjs';

export interface Item{
  moduleName: string;
  items$: Observable<any>[];
}
