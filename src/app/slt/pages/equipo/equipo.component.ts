import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent implements OnInit {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
