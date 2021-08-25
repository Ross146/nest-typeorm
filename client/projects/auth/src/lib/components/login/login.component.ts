import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {Logger} from "../../../../../../src/app/services/logger.service";

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private loggerService: Logger
  ) {
    this.submitted = false;
    this.error = '';
    this.returnUrl = '/';
    this.loginForm = this.formBuilder.group({
      username: ['Ross146', Validators.required],
      password: ['Doctor_46', Validators.required]
    });
  }

  ngOnInit() {
    this.loggerService.log('hello')
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        this.error = '';
        this.router.navigate([this.returnUrl]);
      }, error => {
        this.error = error;
      });
  }
}
