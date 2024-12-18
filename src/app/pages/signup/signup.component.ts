import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-signup',
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,MatDatepickerModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  firstFormGroup:any;
  secondFormGroup:any;
  constructor(private formBuilder:FormBuilder,private router:Router){
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      thirdCtrl:['',Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  ngOnInit(): void {
      
  }
 
  isEditable = false;
  signup(){
    this.router.navigate(['/dashboard'])
  }
}
