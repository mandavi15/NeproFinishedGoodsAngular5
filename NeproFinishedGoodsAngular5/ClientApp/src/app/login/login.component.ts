import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'model-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Login component **/
export class LoginComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) { }

  loginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  
  }

  loginSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));

  };
 

  get f() { return this.loginForm.controls; }
}
