import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/auth.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../auth.style.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  hide = true;
  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { 
    this.signUpForm = this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password: ['', [Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z0-9]+)$'), Validators.minLength(6), Validators.maxLength(25)]]
    })
  }

  ngOnInit() {
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password(){
    return this.signUpForm.get('password')
  }

  signUp(){
    return this.auth.emailSignUp(this.email.value, this.password.value)
    .then( user => {
      if(this.signUpForm.valid){
        this.router.navigate(['/'])
      }
    });
  }
}
