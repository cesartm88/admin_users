import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearListComponent } from './linear-list.component';

describe('LinearListComponent', () => {
  let component: LinearListComponent;
  let fixture: ComponentFixture<LinearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
