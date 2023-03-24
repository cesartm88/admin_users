import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../../../components';
import {PersonalInfo} from '../../../../models/PersonalInfo';
import {Observable} from 'rxjs';
import {ItemListComponent} from '../../../../class/GenericItems';
import {courses} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {StringServiceService} from '../../../../services/string-service.service';
import {RequestService} from '../../../../services/request/request.service';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {CONSTATES} from '../../../../constants/Constants';
import {CoursesObj} from '../../../../interfaces/courses.obj';
import {courses_list} from '../../../../constants/titles_tables';
import {addCourses, AllCourses, deleteCourses, editCourses} from '../../../../actions/courses.actions';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  @ViewChild('tableCourses') tableCourses: TableComponent<CoursesObj>;

  jobs$: Observable<CoursesObj> [] = [];

  itemsList: ItemListComponent<CoursesObj> = new ItemListComponent<CoursesObj>();

  titles = courses_list;

  form = courses;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Cursos y Diplomados',
    name: 'courses'
  };

  constructor(private store: Store<State>, private stringServiceService: StringServiceService, private request: RequestService) {

  }

  ngOnInit(): void {
    this.getPersonalInfoInfo();
    this.updateTable();
  }

  getPersonalInfoInfo(){
    const module = 'courses';
    const result = this.request.getModule(module);
    const these = this;
    result.subscribe({
      next(results){
        console.log(results);
        these.store.dispatch(AllCourses({courses: results.data}));
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
    this.store.select(fromStore.selectCourses).subscribe(
      allCourses => {
        const Courses = allCourses.map( pi => {
          return { ...pi, ...buttonsActions};
        });
        this.jobs$ = Courses;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const studyC: CoursesObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        school: FRM.form.school.value,
        program_name: FRM.form.program_name.value,
        start_date: FRM.form.start_date.value,
        finish_date: FRM.form.finish_date.value
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addCourses({ courses: studyC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
      this.store.dispatch(deleteCourses({courses: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const studyC: CoursesObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        school: FRM.form.school.value,
        program_name: FRM.form.program_name.value,
        start_date: FRM.form.start_date.value,
        finish_date: FRM.form.finish_date.value
      };
      if (FRM.formGroup.status !== 'INVALID') {
        this.store.dispatch(editCourses({courses: studyC}));
      }
    }
  }

  guardar(){
    if ( this.jobs$.length > 0){
      this.store.select(fromStore.selectCourses).subscribe(
        allCourses => {
          console.dir(allCourses);
          const json = {
            module: 'courses',
            data: allCourses
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
