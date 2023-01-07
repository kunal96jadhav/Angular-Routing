import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menuclass } from 'src/app/classes/menuclass';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router:Router){}

  // now we have to get role from role comp. we use @Input decorator---- and userRole is variable of that decorator
  @Input() 
  userRole: any;
  // now we are getting all the Data of menu class into the menus array by calling static method menus in the ngOnInit method
  menus:any[];
  ngOnInit()
  {
    // menus method from Menu class is static then we can call directly by using class name---
    this.menus=Menuclass.menus;
  }

}
