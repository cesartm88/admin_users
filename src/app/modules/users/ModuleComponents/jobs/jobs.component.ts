import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../dialog/dialog.service';
import { jobs_list } from '../../../../constants/titles_tables';
import _jobs from '../../../../../assets/json/jobs';
import {Jobs} from '../../../../models/Jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Array<Jobs> = _jobs;

  titles = jobs_list;

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
  }

}
