import {Component, OnInit, ViewChild} from '@angular/core';
import {jobs_list} from '../../../../constants/titles_tables';
import {Jobs} from '../../../../models/Jobs';
import {jobs} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {addJob, AllJobs, deleteJob, editJob} from '../../../../actions/jobs.actions';
import {JobObj} from '../../../../interfaces/job.obj';
import {CONSTATES} from '../../../../constants/Constants';
import {State} from '../../../../interfaces/state.obj';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {ItemListComponent} from '../../../../class/GenericItems';
import {TableComponent} from '../../../../components';
import {StringServiceService} from '../../../../services/string-service.service';
import {RequestService} from '../../../../services/request/request.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @ViewChild('tableJobs') tableJobs: TableComponent<Jobs>;

  jobs$: Observable<Jobs> [] = [];

  itemsList: ItemListComponent<Jobs> = new ItemListComponent<Jobs>();

  titles = jobs_list;

  form = jobs;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Trabajos',
    name: 'el trabajo'
  };

  constructor(private store: Store<State>, private stringServiceService: StringServiceService, private request: RequestService) {

  }

  ngOnInit(): void {
    this.getJobsInfo();
    this.updateTable();
  }

  getJobsInfo(){
    const module = 'jobs';
    const result = this.request.getModule(module);
    const these = this;
    result.subscribe({
      next(results){
          console.log(results);
          these.store.dispatch(AllJobs({job: results.data}));
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
    this.store.select(fromStore.selectJobs).subscribe(
      allJobs => {
        const jB = allJobs.map( job => {
          return { ...job, ...buttonsActions};
        });
        this.jobs$ = jB;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const jobC: JobObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        company: FRM.form.company.value,
        start_date: FRM.form.start_date.value,
        finish_date: FRM.form.finish_date.value
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addJob({ job: jobC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
        this.store.dispatch(deleteJob({job: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const jobC: JobObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        company: FRM.form.company.value,
        start_date: FRM.form.start_date.value,
        finish_date: FRM.form.finish_date.value
      };
      if (FRM.formGroup.status !== 'INVALID') {
        this.store.dispatch(editJob({job: jobC}));
      }
    }
  }

  guardar(){
    if ( this.jobs$.length > 0){
      console.log("pruebas");
      this.store.select(fromStore.selectJobs).subscribe(
        allJobs => {
          console.dir(allJobs);
          const json = {
            module: 'jobs',
            data: allJobs
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
