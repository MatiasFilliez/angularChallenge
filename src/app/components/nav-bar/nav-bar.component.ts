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
    const profile = this.document.getElementById('profile')
    const profileName = this.document.getElementById('profileName')
    const profileName2 = this.document.getElementById('profileName2')
    const profileName3 = this.document.getElementById('profileName3')
    
    navBar!.className === 'closed-navBar'
      ?  (navBar!.className = 'opened-navBar', 
      arrow!.setAttribute('src','../../../assets/icons/leftArrow.png'), 
      profile!.hidden = false, 
      profileName!.hidden = false,
      profileName2!.hidden = false,
      profileName3!.hidden = false
      ) 
      :  (navBar!.className = 'closed-navBar', 
      arrow!.setAttribute('src','../../../assets/icons/rightArrow.png'), 
      profile!.hidden = true,  
      profileName!.hidden = true,
      profileName2!.hidden = true,
      profileName3!.hidden = true
      
      )
  
     
  }
}