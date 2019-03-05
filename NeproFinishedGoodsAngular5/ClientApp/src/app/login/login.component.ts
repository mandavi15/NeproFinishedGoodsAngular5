import { Component, OnInit } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'model-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Login component*/
export class LoginComponent implements OnInit {
  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  public href: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.href = this.router.url;

    console.log(this.router.url);
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
   
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
  //loginSubmit() {
  //  this.myform = true;

  //  // stop here if form is invalid
  //  if (this.myform.invalid) {
  //    return;
  //  }

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myform.value));

  //}
  //get f() { return this.myform.controls; }
}
