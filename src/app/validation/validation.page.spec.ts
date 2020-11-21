import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationPage } from './validation.page';

describe('ValidationPage', () => {
  let component: ValidationPage;
  let fixture: ComponentFixture<ValidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
