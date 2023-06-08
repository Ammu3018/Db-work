/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpService } from 'libs/shared/src/lib/emp.service'

@Component({
  selector: 'nx-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  myForm!: FormGroup;

  constructor(private Empser: EmpService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      empCode: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.myForm.value.empCode = ('EMP' + this.myForm.value.empCode)
      this.Empser.postEmployee(this.myForm.value).subscribe(
        res => { console.log(res) }
      )
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}
