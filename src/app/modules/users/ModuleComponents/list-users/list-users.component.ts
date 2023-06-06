import {Component, OnInit, ViewChild} from '@angular/core';
import { users_config } from '../../../../constants/titles_tables';
import {TableObj} from '../../../../interfaces/table.obj';
import {Observable} from 'rxjs';
import {Jobs} from '../../../../models/Jobs';
import {formUser} from '../../../../constants/form';
import {CONSTATES} from '../../../../constants/Constants';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {StringServiceService} from '../../../../services/string-service.service';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {User} from '../../../../models/User';
import {addUser, deleteUser, editUser} from '../../../../actions/users.actions';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users$: Observable<Jobs> [] = [];

  form = formUser;

  ID: TableObj = {
    ID: 'sync',
    moduleName: 'Usuarios',
    name: 'el usuario'
  };

  titles = users_config;

  constructor(private store: Store<State>, private stringServiceService: StringServiceService) {
    this.updateTable();
  }

  ngOnInit(): void {
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    console.dir($event);
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const userC: User = {
        sync: (FRM.form.sync.value) ? FRM.form.sync.value : this.stringServiceService.randomString(10),
        picture: FRM.form.picture.value,
        name: FRM.form.name.value,
        fathersLastName: FRM.form.fathersLastName.value,
        mothersLastName: FRM.form.mothersLastName.value,
        email: FRM.form.email.value,
        roleId: 1,
        active: true
      };
      console.log(FRM.formGroup.status);
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addUser({ user: userC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
      this.store.dispatch(deleteUser({user: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const userC: User = {
        sync: (FRM.form.sync.value) ? FRM.form.sync.value : this.stringServiceService.randomString(10),
        picture: FRM.form.picture.value,
        name: FRM.form.name.value,
        fathersLastName: FRM.form.fathersLastName.value,
        mothersLastName: FRM.form.mothersLastName.value,
        email: FRM.form.email.value,
        roleId: 1,
        active: true
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(editUser({ user: userC }));
      }
    }
  }

  async updateTable(){
    this.store.select(fromStore.selectUsers).subscribe(
      allUsers => {
        const usr = allUsers.map( job => {
          return { ...job, ...buttonsActions};
        });
        this.users$ = usr;
      }
    );
  }

  guardar(){
    console.log('pruebas!!');
  }
}
