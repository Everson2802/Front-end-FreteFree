import { Component, OnInit } from '@angular/core';
import { BackButtonService } from '../components/back-button.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  constructor(private bkButton: BackButtonService) { }

  ngOnInit() {
    this.bkButton.actionButton('/register');
  }

}
