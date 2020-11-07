import { Component, OnInit } from '@angular/core';
import { BackButtonService } from '../components/back-button.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
})
export class CongratulationsPage implements OnInit {

  constructor(private bkButton: BackButtonService) { }

  ngOnInit() {
    this.bkButton.actionButton('/map');
  }

}
