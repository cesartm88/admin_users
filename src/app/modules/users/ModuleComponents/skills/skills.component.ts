import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../../../components';
import {Observable} from 'rxjs';
import {ItemListComponent} from '../../../../class/GenericItems';
import {  skillsOrders } from '../../../../constants/orders_tables';
import {skills} from '../../../../constants/form';
import {TableObj} from '../../../../interfaces/table.obj';
import {Store} from '@ngrx/store';
import {State} from '../../../../interfaces/state.obj';
import {StringServiceService} from '../../../../services/string-service.service';
import {RequestService} from '../../../../services/request/request.service';
import {addLanguajes, AllLanguajes, deleteLanguajes, editLanguajes} from '../../../../actions/languajes.actions';
import * as fromStore from '../../../../constants/ReduxConstants';
import {buttonsActions} from '../../../../constants/buttons';
import {CONSTATES} from '../../../../constants/Constants';
import {SkillsObj} from '../../../../interfaces/skills.obj';
import {skills_list } from '../../../../constants/titles_tables';
import {Skill} from '../../../../models/Skills';
import {selectSkills} from '../../../../constants/ReduxConstants';
import {addskills, deleteskills, editskills} from '../../../../actions/skills.actions';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild('tableSkills') tableSkills: TableComponent<Skill>;

  skills$: Observable<Skill> [] = [];

  itemsList: ItemListComponent<Skill> = new ItemListComponent<Skill>();

  titles = skills_list;

  order: string[] = skillsOrders;

  form = skills;

  ID: TableObj = {
    ID: 'id',
    moduleName: 'Habilidades',
    name: 'skills'
  };

  constructor(private store: Store<State>, private stringServiceService: StringServiceService, private request: RequestService) {

  }

  ngOnInit(): void {
    this.getLanguajes();
    this.updateTable();
  }

  getLanguajes(){
    const module = 'languajes';
    const result = this.request.getModule(module);
    const these = this;
    result.subscribe({
      next(results){
        console.log(results);
        these.store.dispatch(AllLanguajes({languajes: results.data}));
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
    this.store.select(fromStore.selectSkills).subscribe(
      allSkills => {
        const Skills = allSkills.map( pi => {
          return { ...pi, ...buttonsActions};
        });
        this.skills$ = Skills;
      }
    );
  }

  getFormResult($event: any){
    const FRM = $event.data.data;
    if ( $event.action === CONSTATES.CONSTANTE_NUEVO){
      const pfC: SkillsObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        skill: FRM.form.skill.value,
        porcentaje: FRM.form.porcentaje.value
      };
      if ( FRM.formGroup.status !== 'INVALID'){
        this.store.dispatch(addskills({ skills: pfC }));
      }
    }else if ($event.action === CONSTATES.CONSTANTE_DELETE) {
      this.store.dispatch(deleteskills({skills: FRM}));
    }else if ($event.action === CONSTATES.CONSTANTE_EDIT){
      const pfC: SkillsObj = {
        id: (FRM.form.id.value) ? FRM.form.id.value : this.stringServiceService.randomString(10),
        skill: FRM.form.skill.value,
        porcentaje: FRM.form.porcentaje.value
      };
      if (FRM.formGroup.status !== 'INVALID') {
        this.store.dispatch(editskills({skills: pfC}));
      }
    }
  }

  guardar(){
    if ( this.skills$.length > 0){
      this.store.select(fromStore.selectSkills).subscribe(
        allSkills => {
          const json = {
            module: 'skills',
            data: allSkills
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
