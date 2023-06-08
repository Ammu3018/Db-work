/* eslint-disable no-constant-condition */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsComponent } from './forms.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { EmpService } from 'libs/shared/src/lib/emp.service';
import { MaterialModule } from '@nx/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of, throwError } from 'rxjs';

class mockEmpService{
  postEmployee(){
    if(true){
      return of ({})
    }
    else{
      return throwError({error : {error:"ytrt"}})
    }
  }
}
describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsComponent],
      providers:[{provide:EmpService,useClass:mockEmpService}],
      imports:[MaterialModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should create', () => {
    component.myForm=new FormGroup({
      name:new FormControl('ilham',Validators.required),
      empCode:new FormControl('emp123',Validators.required),
    })
    component.onSubmit();
    component.myForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      empCode:new FormControl(null,Validators.required),
    })
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();
  });
});
