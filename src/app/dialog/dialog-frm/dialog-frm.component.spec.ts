import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFrmComponent } from './dialog-frm.component';

describe('DialogFrmComponent', () => {
  let component: DialogFrmComponent;
  let fixture: ComponentFixture<DialogFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
