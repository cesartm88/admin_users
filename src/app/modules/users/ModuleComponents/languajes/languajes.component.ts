import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../../../components';
import {Observable} from 'rxjs';
import {ItemListComponent} from '../../../../class/GenericItems';
import {languajes} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {StringServiceService} from '../../../../services/string-service.service';
import {RequestService} from '../../../../services/request/request.service';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {CONSTATES} from '../../../../constants/Constants';
import {languajes_list } from '../../../../constants/titles_tables';
import {Languaje} from '../../../../models/Languajes';
import {LanguajeObj} from '../../../../interfaces/languaje.obj';
import {addLanguajes, AllLanguajes, deleteLanguajes, editLanguajes} from '../../../../actions/languajes.actions';
import {languajesOrder} from '../../../../constants/orders_tables';

@Component({
  selector: 'app-languajes',
  templateUrl: './languajes.component.html',
  styleUrls: ['./languajes.component.scss']
})
export class LanguajesComponent implements OnInit {

  @ViewChild('tableLanguajes') tableLanguajes: TableComponent<Languaje>;

  jobs$: Observable<Languaje> [] = [];

  itemsList: ItemListComponent<Languaje> = new ItemListComponent<Languaje>();

  titles = languajes_list;

  order: string[] = languajesOrder;

  form = languajes;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Idiomas',
    name: 'languajes'
  };

  constructor(private store: Store<State>, private stringServiceService: StringServiceService, private request: RequestService) {

  }

  ngOnInit(): void {
    this.getLanguajes();
    this.updateTable();
  }

  getLanguajes(){
    const module = 'languajes';
    const result = this.request.getModule(module);
    const these = this;
    result.subscribe({
      next(results){
        console.log(results);
        these.store.dispatch(AllLanguajes({languajes: results.data}));
      },
      error(error){
        console.error(error);
      },
      complete(){
        console.log('ready!');
      }
    });
  }

  async updateTable(){
    this.store.select(fromStore.selectLanguajes).subscribe(
      allLanguajes => {
        const Languajes = allLanguajes.map( pi => {
          return { ...pi, ...buttonsActions};
        });
        this.jobs$ = Languajes;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const pfC: LanguajeObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        languaje: FRM.form.languaje.value,
        level: FRM.form.level.value
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addLanguajes({ languajes: pfC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
      this.store.dispatch(deleteLanguajes({languajes: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const pfC: LanguajeObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        languaje: FRM.form.languaje.value,
        level: FRM.form.level.value
      };
      if (FRM.formGroup.status !== 'INVALID') {
        this.store.dispatch(editLanguajes({languajes: pfC}));
      }
    }
  }

  guardar(){
    if ( this.jobs$.length > 0){
      this.store.select(fromStore.selectLanguajes).subscribe(
        allLanguajes => {
          const json = {
            module: 'languajes',
            data: allLanguajes
          };
          const result = this.request.setModule(json);
          result.subscribe({
            next(res){
              console.log(res);
            },
            error(error){
              console.error(error);
            },
            complete(){
              console.log('ready!');
            }
          });
        }
      );
    }
  }
}
