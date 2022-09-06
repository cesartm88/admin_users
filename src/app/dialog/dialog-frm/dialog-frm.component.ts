import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../modules/dialog/dialog.service';
import { UntypedFormGroup,UntypedFormBuilder,Validators } from '@angular/forms';
import { User } from '../../models/User';

@Component({
  selector: 'app-dialog-frm',
  templateUrl: './dialog-frm.component.html',
  styleUrls: ['./dialog-frm.component.scss']
})
export class DialogFrmComponent implements OnInit {

  addUserFrm:UntypedFormGroup;
  fields;
  usr:User= {
          picture:'',
          name:'',
          fathersLastName:'',
          mothersLastName:'',
          email:'',
          roleId:1,
          active:true
      };

  constructor(private dialogService:DialogService,private fb:UntypedFormBuilder) { 
      this.fields = {
        picture:['',[]],
        name:['',[Validators.required,Validators.minLength(2)]],
        fathersLastName:['',[Validators.required,Validators.minLength(2)]],
        mothersLastName:[''],
        email:['',[Validators.required,Validators.email]],
        roleId:[1,[Validators.required, Validators.pattern("^[1-3]*$")]],
        active:[true]
      };
      this.addUserFrm = this.fb.group(this.fields);
  }

  public errorHandling = (control: string, error: string) => {
    return this.addUserFrm.controls[control].hasError(error);
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogService.close();
  }

}
