import { Component} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

  options2 : AnimationOptions = {
    path : 'assets/lottie/tecnologias/data.json'
  }

  constructor() { }

  
}
