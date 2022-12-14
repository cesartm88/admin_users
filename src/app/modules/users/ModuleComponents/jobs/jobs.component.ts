import { Component, OnInit } from '@angular/core';
import { jobs_list } from '../../../../constants/titles_tables';
import _jobs from '../../../../../assets/json/jobs';
import { Jobs } from '../../../../models/Jobs';
import { formUser } from '../../../../constants/form';
import {FormObj} from '../../../../interfaces/form.obj';
import {TableObj} from '../../../../interfaces/table.obj';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Array<Jobs> = _jobs;

  titles = jobs_list;

  form = formUser;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Trabajos',
    name: 'el trabajo'
  };

  constructor() { }

  ngOnInit(): void {
  }

  getFormResult($event: FormObj){
    console.dir($event);
  }

}
