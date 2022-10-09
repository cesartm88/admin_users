import { Component, OnInit } from '@angular/core';
import { jobs_list } from '../../../../constants/titles_tables';
import _jobs from '../../../../../assets/json/jobs';
import { Jobs } from '../../../../models/Jobs';
import { formUser } from '../../../../constants/form';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Array<Jobs> = _jobs;

  titles = jobs_list;

  form = formUser;

  constructor() { }

  ngOnInit(): void {
  }

}
