import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-form-view-one',
  templateUrl: './form-view-one.component.html',
  styleUrls: ['./form-view-one.component.css']
})
export class FormViewOneComponent {
  constructor(@Inject(DOCUMENT)private document: Document,){}

  modalFlag:boolean = false

  get name (){
    return this.formUser.get('name') as FormControl
  }

  get lastName (){
    return this.formUser.get('lastName') as FormControl
  }

  get phoneNumber (){
    return this.formUser.get('phoneNumber') as FormControl
  }

  get documentNumber (){
    return this.formUser.get('documentNumber') as FormControl
  }

  get email (){
    return this.formUser.get('email') as FormControl
  }

  formUser = new FormGroup({
    'name' : new FormControl('', Validators.required),
    'lastName' : new FormControl('', Validators.required),
    'phoneNumber' : new FormControl('', Validators.required),
    'documentNumber' : new FormControl('', Validators.required),
    'email' : new FormControl('', [Validators.required, Validators.email])
  })

  // Agrega un evento de escucha al formulario para capturar el envío
  test(){
   /*  this.modalFlag = true
    console.log(this.formUser.value)  */
     this.formUser.reset() 
    
  }
}
