import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  img:String = "https://source.unsplash.com/random"
  saludo:String = " Hola mundo cruel"
  n1:Number = 8
  n2:Number = 10
}
