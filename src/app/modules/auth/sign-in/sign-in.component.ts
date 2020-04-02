import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public emailRegex: RegExp = new RegExp('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$');
  public authForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private messageService: NzMessageService
  ) {
    this.authForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  public signIn() {
    this.checkValidation();
    this.authService.signIn(this.authForm.value).subscribe(data => {
      this.localStorageService.saveToken(data.token);
      this.localStorageService.saveUser(data.user);
      this.router.navigateByUrl('/app/home');
    }, err => {
      this.messageService.create('error', err.error.error);
    });
  }

  private checkValidation() {
    for (const i of Object.keys(this.authForm.controls)) {
      this.authForm.controls[i].markAsDirty();
      this.authForm.controls[i].updateValueAndValidity();
    }
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(this.emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  public get email() {
    return this.authForm.get('email');
  }

  public get password() {
    return this.authForm.get('password');
  }

}
