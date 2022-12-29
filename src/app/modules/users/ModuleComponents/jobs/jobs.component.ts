import { Component, OnInit } from '@angular/core';
import { jobs_list } from '../../../../constants/titles_tables';
import _jobs from '../../../../../assets/json/jobs';
import { Jobs } from '../../../../models/Jobs';
import { jobs } from '../../../../constants/form';
import {FormObj} from '../../../../interfaces/form.obj';
import {TableObj} from '../../../../interfaces/table.obj';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addJob } from '../../../../actions/jobs.actions';
import {JobObj} from '../../../../interfaces/job.obj';
import {CONSTATES} from '../../../../constants/Constants';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Observable<Array<Jobs>> = new Observable<Array<Jobs>>();

  titles = jobs_list;

  form = jobs;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Trabajos',
    name: 'el trabajo'
  };

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  getFormResult($event: any){
    console.dir($event.data.data);
    const FRM = $event.data.data;
    console.dir(FRM.formGroup.status);
    if ( $event.action = CONSTATES.CONSTANTE_NUEVO && FRM.formGroup.status !== 'INVALID'){
       const jobC: JobObj = {
         id: null,
         company: FRM.form.company.value,
         start_date: FRM.form.start_date.value,
         finish_date: FRM.form.finish_date.value
       };
       console.log('store!!', jobC);
       this.store.dispatch(addJob({ job: jobC }));
    }
  }

}
