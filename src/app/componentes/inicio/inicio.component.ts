import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  imgRoot = 'assets/img/';
  sndRoot = 'assets/snd/';
  elems = [
    { title: '1', imgPath: this.imgRoot + 'items/mkt.png', soundPath: this.sndRoot + 'mkt.mp3', bgPath: this.imgRoot + 'bg/mkt.png' },
    { title: '2', imgPath: this.imgRoot + 'items/ssb64.png', soundPath: this.sndRoot + 'ssb64.mp3', bgPath: this.imgRoot + 'bg/ssb64.jpg' },
    { title: '3', imgPath: this.imgRoot + 'items/sf2ce.png', soundPath: this.sndRoot + 'sf2ce.mp3', bgPath: this.imgRoot + 'bg/sf2ce.jpg' },
    { title: '4', imgPath: this.imgRoot + 'items/tekken7.png', soundPath: this.sndRoot + 'tekken7.mp3', bgPath: this.imgRoot + 'bg/tekken7.jpg' },
    { title: '5', imgPath: this.imgRoot + 'items/usfiv.jpg', soundPath: this.sndRoot + 'usfiv.mp3', bgPath: this.imgRoot + 'bg/usfiv.jpg' },
    { title: '6', imgPath: this.imgRoot + 'items/ssbpm.jpg', soundPath: this.sndRoot + 'ssbpm.mp3', bgPath: this.imgRoot + 'bg/ssbpm.png' },
    { title: '7', imgPath: this.imgRoot + 'items/kof2002um.jpg', soundPath: this.sndRoot + 'kof2002um.mp3', bgPath: this.imgRoot + 'bg/kof2002um.png' },
    { title: '8', imgPath: this.imgRoot + 'items/ki.jpg', soundPath: this.sndRoot + 'ki.mp3', bgPath: this.imgRoot + 'bg/ki.png' },
    { title: '9', imgPath: this.imgRoot + 'items/mvci.jpg', soundPath: this.sndRoot + 'mvci.mp3', bgPath: this.imgRoot + 'bg/mvci.jpg' },
    { title: '10', imgPath: this.imgRoot + 'items/sfv.jpg', soundPath: this.sndRoot + 'sfv.mp3', bgPath: this.imgRoot + 'bg/sfv.jpg' },
  ]

  bgElems = [
    this.imgRoot + 'bg/sf2ce.jpg',
    this.imgRoot + 'bg/mkt.png',
    this.imgRoot + 'bg/ki.png',
    this.imgRoot + 'bg/kof2002um.png',
    this.imgRoot + 'bg/sfv.jpg',
    this.imgRoot + 'bg/ssb64.jpg',
    this.imgRoot + 'bg/tekken7.jpg',
    this.imgRoot + 'bg/usfiv.jpg',
    this.imgRoot + 'bg/mvci.jpg',
    this.imgRoot + 'bg/ssbpm.png',
  ]

  bgIndex = this.bgElems.length;
  bgPath = this.elems[0].bgPath;
  btnSrc = this.imgRoot + 'logoToler_3.png';
  triangleSrc = this.imgRoot + 'triangle.png';

  minVueltas = 4;
  ry = 0;

  disableBtn = false;

  constructor() { }

  ngOnInit() {
    // Observable.interval(1000 * 5).subscribe(x => {
    //   this.changeInterval();
    // });
  }

  spin() {
    if (!this.disableBtn) {
      this.disableBtn = true;
      this.ry += Math.floor(Math.random() * this.elems.length) + (this.elems.length * this.minVueltas);
      const audio = new Audio(this.elems[(this.ry % this.elems.length)].soundPath);

      setTimeout(() => {
        audio.play();
        this.disableBtn = false;
        this.bgPath = this.elems[(this.ry % this.elems.length)].bgPath;
      },
        7000);
    }
  }

  changeInterval() {
    this.bgIndex += 1;
  }

}
