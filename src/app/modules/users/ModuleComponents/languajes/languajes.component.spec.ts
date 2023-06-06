import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguajesComponent } from './languajes.component';

describe('LanguajesComponent', () => {
  let component: LanguajesComponent;
  let fixture: ComponentFixture<LanguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
