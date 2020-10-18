import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BackButtonService } from '../components/back-button.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private bkButton: BackButtonService
  ) { }

  ngOnInit() {
    this.bkButton.actionButton('/');
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  login() {
    this.navCtrl.navigateRoot('/map');
  }
}
