import { Injectable } from '@angular/core';
import { NavController, Platform, ToastController } from '@ionic/angular';


@Injectable({
	providedIn: 'root'
})
export class BackButtonService {

	private unsubscribeBackEvent: any;
	private countExit = 0;

	constructor(private platform: Platform, private navCtrl: NavController, private toastController: ToastController) { }

	ionViewWillLeave() {
		this.unsubscribeBackEvent && this.unsubscribeBackEvent();
	}

	actionButton(route: string) {
		
		this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999, () => {
			if (route.trim() == "exit") {
				if (this.countExit == 0) {
					this.showToast("Pressione duas vezes para sair!");
					this.countExit++;
					setTimeout(() => {
						this.countExit = 0;
					}, 1000);
				} else {
					navigator['app'].exitApp();
				}
			} else {
				this.navCtrl.navigateRoot(route);
			}
		});
	}

	async showToast(msg: string, color: string = 'dark', duracion: number = 2000, btn: boolean = true, position: any = 'bottom') {
		const toast = await this.toastController.create({
			message: msg,
			// showCloseButton: btn,
			buttons: [
        {
          side: 'end',
          icon: 'close',
          text: '',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ],
			position: position,
			color: color,
			duration: duracion
		});
		toast.present();
	}


}
