import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Login',
      url: '/folder/Inbox',
      icon: 'log-in'
    },
    {
      title: 'Histórico de Corridas',
      url: '#',
      icon: 'list'
    },
    {
      title: 'Pagamento',
      url: '#',
      icon: 'cash'
    },
    {
      title: 'Configurações',
      url: '#',
      icon: 'settings'
    },
    {
      title: 'Sobre',
      url: '#',
      icon: 'information-circle'
    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      // this.statusBar.styleLightContent();
      // this.statusBar.backgroundColorByHexString('#f5f5f0');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
