import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ruleta-container',
  templateUrl: './ruleta-container.component.html',
  styleUrls: ['./ruleta-container.component.css']
})
export class RuletaContainerComponent implements OnInit {

  @Input() elems: Array<any>;
  @Input() ry: number;

  width = 650;
  height = 400;

  cantElem: number;
  factor: number;
  tz: any;

  containerStyle = {}

  constructor() { }

  ngOnInit() {
    this.cantElem = this.elems.length;
    this.factor = 360 / this.cantElem;
    this.tz = Math.round( ( this.width / 2 ) /  Math.tan( Math.PI / this.cantElem ) );
  }

}
