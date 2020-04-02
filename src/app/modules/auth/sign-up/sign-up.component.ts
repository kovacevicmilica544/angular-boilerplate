import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../../shared/models/user.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public emailRegex: RegExp = new RegExp('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$');
  public signupForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: NzMessageService
  ) {
    this.signupForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  public signUp() {
    this.checkValidation();
    this.authService.signUp(new User(this.signupForm.value)).subscribe(data => {
      this.messageService.create('success', 'You are successfully registered!');
      this.router.navigateByUrl('auth/sign-in');
    }, err => {
      this.messageService.create('error', 'Check form fields!');
    });
  }

  private checkValidation() {
    for (const i of Object.keys(this.signupForm.controls)) {
      this.signupForm.controls[i].markAsDirty();
      this.signupForm.controls[i].updateValueAndValidity();
    }
  }

  public updateConfirmValidator(): void {
    Promise.resolve().then(() => this.signupForm.controls.checkPassword.updateValueAndValidity());
  }


  private confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signupForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(this.emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
    });
  }

  public get email() {
    return this.signupForm.get('email');
  }

  public get password() {
    return this.signupForm.get('password');
  }

  public get firstName() {
    return this.signupForm.get('firstName');
  }

  public get lastName() {
    return this.signupForm.get('lastName');
  }

}
