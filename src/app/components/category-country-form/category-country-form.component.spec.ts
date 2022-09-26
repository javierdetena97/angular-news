import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCountryFormComponent } from './category-country-form.component';

describe('FormComponent', () => {
  let component: CategoryCountryFormComponent;
  let fixture: ComponentFixture<CategoryCountryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCountryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
