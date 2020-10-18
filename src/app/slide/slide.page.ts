import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { BackButtonService } from '../components/back-button.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss']
})
export class SlidePage implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private bkButton: BackButtonService) {
  }

  ngOnInit() {
    this.bkButton.actionButton('/');
  }

  nextSlide() {
    this.slides.slideNext();
  }

}