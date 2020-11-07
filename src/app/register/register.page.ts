import { Component, OnInit } from '@angular/core';
import { BackButtonService } from '../components/back-button.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private bkButton: BackButtonService) { }

  ngOnInit() {
    this.bkButton.actionButton('/folder/inbox');
  }

}
