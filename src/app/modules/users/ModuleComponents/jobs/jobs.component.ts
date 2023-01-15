import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {jobs_list} from '../../../../constants/titles_tables';
import {Jobs} from '../../../../models/Jobs';
import {jobs} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {addJob} from '../../../../actions/jobs.actions';
import {JobObj} from '../../../../interfaces/job.obj';
import {CONSTATES} from '../../../../constants/Constants';
import {State} from '../../../../interfaces/state.obj';
import * as fromStore from '../../../../constants/ReduxConstants';
import {map} from 'rxjs/operators';
import {buttonsActions} from '../../../../constants/buttons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs$: Observable<Jobs[]> = new Observable<Jobs[]>();

  titles = jobs_list;

  form = jobs;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Trabajos',
    name: 'el trabajo'
  };

  constructor(private store: Store<State>) {
    this.updateTable();
  }

  ngOnInit(): void {
  }

  async updateTable(){
    this.store.select(fromStore.selectJobs).subscribe(
      allJobs => {
        console.warn(allJobs);
        const jB = allJobs.map( job => {
          return { ...job, ...buttonsActions};
        });
        console.error(jB);
        this.jobs$ = jB;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO && FRM.formGroup.status !== 'INVALID'){
       const jobC: JobObj = {
         id: null,
         company: FRM.form.company.value,
         start_date: FRM.form.start_date.value,
         finish_date: FRM.form.finish_date.value
       };
       this.store.dispatch(addJob({ job: jobC }));
    }
  }

}
