import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ruleta-item',
  templateUrl: './ruleta-item.component.html',
  styleUrls: ['./ruleta-item.component.css']
})
export class RuletaItemComponent implements OnInit {

  @Input() elem: any;
  @Input() rotateY: string;
  @Input() translateZ: string;

  constructor() { }

  ngOnInit() {
  }

}
