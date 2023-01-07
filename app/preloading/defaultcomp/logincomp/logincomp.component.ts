import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.scss']
})
export class LogincompComponent {
  constructor(private fb:FormBuilder,private cs:CommonserviceService,private router:Router){}

  login:FormGroup;

  ngOnInit()
  {
    this.login=this.fb.group({
      username:[this.cs.loginclass.username],
      password:[this.cs.loginclass.password]
    })
  }

  loginMethod()
  {
      alert("login proccess started");
      if(this.login.get("username").value==="oe" && this.login.get("password").value==="oe")
      {
          alert("Login successfull for Operational Executive");
          localStorage.setItem("role","oe");
          this.router.navigateByUrl("/rolecomp");
          
      }
       else if(this.login.get("username").value==="re" && this.login.get("password").value==="re")
      {
          alert("Login successfull for Relational Executive");
          localStorage.setItem("role","re");
          this.router.navigateByUrl("/rolecomp");
      }
      else if(this.login.get("username").value==="ah" && this.login.get("password").value==="ah")
      {
          alert("Login successfull for Account Head");
          localStorage.setItem("role","ah");
          this.router.navigateByUrl("/rolecomp");
      }
      else if(this.login.get("username").value==="cm" && this.login.get("password").value==="cm")
      {
          alert("Login successfull for Credit Manager");
          localStorage.setItem("role","cm");
          this.router.navigateByUrl("/rolecomp");
      }

  }
}
