import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormComponent} from '../../../forms/form/form.component';
import {FormObj} from '../../../../interfaces/form.obj';
import {login} from '../../../../constants/form';
import {RequestService} from '../../../../services/request/request.service';
import {UserLoguedObj, UserObj} from '../../../../interfaces/user.obj';

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

  constructor(private requestService: RequestService){}

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
    loggedUser.subscribe({
      next(result){
        this.userLogged = result;
        console.dir(this.userLogged);
      },
      error(error){
        console.error(error);
      },
      complete(){
        console.log('ready');
      }
    });
  }

}
