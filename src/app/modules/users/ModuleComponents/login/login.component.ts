import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormComponent} from '../../../forms/form/form.component';
import {FormObj} from '../../../../interfaces/form.obj';
import {login} from '../../../../constants/form';
import {RequestService} from '../../../../services/request/request.service';
import {UserLoguedObj, UserObj} from '../../../../interfaces/user.obj';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {updateInfo} from '../../../../actions/userInfo.actions';
import {UserInfo} from '../../../../models/UserInfo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();
  json: any = {};
  formResult: object;
  login: UserObj = {
    email: '',
    password: ''
  };
  userLogged: UserLoguedObj;

  @ViewChild(FormComponent) form: FormComponent;

  constructor(private store: Store<State>, private router: Router, private requestService: RequestService){}

  ngOnInit(): void {
    this.json = login;
  }

  components(fg: FormObj) {
    this.formResult = fg;
    console.dir(this.formResult);
  }

  aceptar(){
    const keyForm = 'form';
    this.eventsSubject.next();
    this.login.email = this.formResult[keyForm].email?.value;
    this.login.password = this.formResult[keyForm].password?.value;
    console.dir(this.login);
    const loggedUser: Observable<any> = this.requestService.login(this.login);
    const these = this;
    loggedUser.subscribe({
      next(result){
        this.userLogged = result;
        const usr: UserInfo = {
          name: this.userLogged.user.name,
          email: this.userLogged.user.email,
          token: this.userLogged.authorisation.token
        };
        console.log(usr);
        these.store.dispatch(updateInfo({userInfo: usr}));
      },
      error(error){
        console.error(error);
      },
      complete(){
        console.log('ready');
        these.router.navigate(['/users/list']);
      }
    });
  }
}
