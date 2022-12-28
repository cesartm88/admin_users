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

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Array<Jobs> = _jobs;

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

  getFormResult($event: FormObj){
    console.dir($event);
  }

  pruebas(){
    const obj: JobObj = {
      id: 1,
      company: 'pruebas',
      start_date: '12/11/1988',
      finish_date: '12/11/1988'
    };
    this.store.dispatch(addJob({ job: obj }));
    console.log('pruebas!!');
  }

}
