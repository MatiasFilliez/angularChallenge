import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  
  constructor(@Inject(DOCUMENT)private document: Document){}

  openNavBar(){

    const navBar = this.document.getElementById('navBar')
    const arrow =  this.document.getElementById('arrowElement')
    
    navBar!.className === 'closed-navBar'
      ?  (navBar!.className = 'opened-navBar', arrow!.setAttribute('src','../../../assets/icons/leftArrow.png')) 
      :  (navBar!.className = 'closed-navBar', arrow!.setAttribute('src','../../../assets/icons/rightArrow.png'))
  
     
  }
}