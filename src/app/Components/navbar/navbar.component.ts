import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  posi = "";
  dis = "none"

  hamFunc(){
    this.posi = "0vw";
    this.dis = "block";
  }

  xFunc(){
    this.posi = "-100vw";
    this.dis = "none"
  }
}
