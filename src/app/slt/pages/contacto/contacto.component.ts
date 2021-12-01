import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }


}
