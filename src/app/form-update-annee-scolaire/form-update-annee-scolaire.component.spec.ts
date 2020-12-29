import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateAnneeScolaireComponent } from './form-update-annee-scolaire.component';

describe('FormUpdateAnneeScolaireComponent', () => {
  let component: FormUpdateAnneeScolaireComponent;
  let fixture: ComponentFixture<FormUpdateAnneeScolaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateAnneeScolaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateAnneeScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
