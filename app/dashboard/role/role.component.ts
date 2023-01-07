import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {


  role:string;
  ngOnInit()
  {
    this.role=localStorage.getItem("role");
  }

}
