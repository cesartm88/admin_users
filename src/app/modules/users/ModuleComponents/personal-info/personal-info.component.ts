import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../../../components';
import {PersonalInfo} from '../../../../models/PersonalInfo';
import {Observable} from 'rxjs';
import {ItemListComponent} from '../../../../class/GenericItems';
import {personalInfo} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {StringServiceService} from '../../../../services/string-service.service';
import {RequestService} from '../../../../services/request/request.service';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {CONSTATES} from '../../../../constants/Constants';
import {PersonalInfoObj} from '../../../../interfaces/personalInfo.obj';
import {personaInfo_list} from '../../../../constants/titles_tables';
import {addPersonalInfo, AllPersonalInfo, deletePersonalInfo, editPersonalInfo} from '../../../../actions/personalInfo.actions';
import {personalInfoFieldsOrder} from '../../../../constants/orders_tables';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @ViewChild('tableJobs') tableJobs: TableComponent<PersonalInfo>;

  jobs$: Observable<PersonalInfo> [] = [];

  itemsList: ItemListComponent<PersonalInfo> = new ItemListComponent<PersonalInfo>();

  order: string[] = personalInfoFieldsOrder;

  titles = personaInfo_list;

  form = personalInfo;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Información personal',
    name: 'personalInfo'
  };

  constructor(private store: Store<State>, private stringServiceService: StringServiceService, private request: RequestService) {

  }

  ngOnInit(): void {
    this.getPersonalInfoInfo();
    this.updateTable();
  }

  getPersonalInfoInfo(){
    const module = 'personalInfo';
    const result = this.request.getModule(module);
    const these = this;
    result.subscribe({
      next(results){
        console.dir(results);
        these.store.dispatch(AllPersonalInfo({personalInfo: results.data}));
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
    this.store.select(fromStore.selectpersonalInfo).subscribe(
      allPersonalInfo => {
        const personalInformation = allPersonalInfo.map( pi => {
          return { ...pi, ...buttonsActions};
        });
        this.jobs$ = personalInformation;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const pfC: PersonalInfo = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        profile_image: FRM.form.profile_image.value,
        name: FRM.form.name.value,
        apellidos: FRM.form.apellidos.value,
        description: FRM.form.description.value,
        frase: FRM.form.frase.value,
        correo: FRM.form.correo.value,
        telefono: FRM.form.telefono.value,
        competencias: FRM.form.competencias.value,
        lenguajes_programacion: FRM.form.lenguajes_programacion.value,
        frameworks: FRM.form.frameworks.value
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addPersonalInfo({ personalInfo: pfC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
      this.store.dispatch(deletePersonalInfo({personalInfo: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const pfC: PersonalInfoObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        profile_image: FRM.form.profile_image.value,
        name: FRM.form.name.value,
        apellidos: FRM.form.apellidos.value,
        description: FRM.form.description.value,
        frase: FRM.form.frase.value,
        correo: FRM.form.correo.value,
        telefono: FRM.form.telefono.value,
        competencias: FRM.form.competencias.value,
        lenguajes_programacion: FRM.form.lenguajes_programacion.value,
        frameworks: FRM.form.frameworks.value
      };
      if (FRM.formGroup.status !== 'INVALID') {
        this.store.dispatch(editPersonalInfo({personalInfo: pfC}));
      }
    }
  }

  guardar(){
    if ( this.jobs$.length > 0){
      this.store.select(fromStore.selectpersonalInfo).subscribe(
        allPersonalInfo => {
          console.dir(allPersonalInfo);
          const json = {
            module: 'personalInfo',
            data: allPersonalInfo
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
