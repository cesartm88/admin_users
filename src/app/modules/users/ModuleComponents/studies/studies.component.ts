import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../../../components';
import {Jobs} from '../../../../models/Jobs';
import {Observable} from 'rxjs';
import {ItemListComponent} from '../../../../class/GenericItems';
import {studies} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {StringServiceService} from '../../../../services/string-service.service';
import {RequestService} from '../../../../services/request/request.service';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {CONSTATES} from '../../../../constants/Constants';
import {studies_list} from '../../../../constants/titles_tables';
import {StudyObj} from '../../../../interfaces/study.obj';
import {addStudy, AllStudies, deleteStudy, editStudy} from '../../../../actions/studies.actions';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  @ViewChild('tableJobs') tableJobs: TableComponent<Jobs>;

  jobs$: Observable<Jobs> [] = [];

  itemsList: ItemListComponent<Jobs> = new ItemListComponent<Jobs>();

  titles = studies_list;

  form = studies;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Estudios',
    name: 'studies'
  };

  constructor(private store: Store<State>, private stringServiceService: StringServiceService, private request: RequestService) {

  }

  ngOnInit(): void {
    this.getStudiesInfo();
    this.updateTable();
  }

  getStudiesInfo(){
    const module = 'studies';
    const result = this.request.getModule(module);
    const these = this;
    result.subscribe({
      next(results){
        console.log(results);
        these.store.dispatch(AllStudies({study: results.data}));
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
    this.store.select(fromStore.selectStudies).subscribe(
      allStudies => {
        const jB = allStudies.map( job => {
          return { ...job, ...buttonsActions};
        });
        this.jobs$ = jB;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const studyC: StudyObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        school: FRM.form.school.value,
        level: FRM.form.level.value,
        program_name: FRM.form.program_name.value,
        start_date: FRM.form.start_date.value,
        finish_date: FRM.form.finish_date.value
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addStudy({ study: studyC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
      this.store.dispatch(deleteStudy({study: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const studyC: StudyObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        school: FRM.form.school.value,
        level: FRM.form.level.value,
        program_name: FRM.form.program_name.value,
        start_date: FRM.form.start_date.value,
        finish_date: FRM.form.finish_date.value
      };
      if (FRM.formGroup.status !== 'INVALID') {
        this.store.dispatch(editStudy({study: studyC}));
      }
    }
  }

  guardar(){
    if ( this.jobs$.length > 0){
      this.store.select(fromStore.selectStudies).subscribe(
        allStudies => {
          console.dir(allStudies);
          const json = {
            module: 'studies',
            data: allStudies
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
