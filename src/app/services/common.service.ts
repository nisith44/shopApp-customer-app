import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastController: ToastController) { }

  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color:'success'
    });

    await toast.present();
  }

  async errorToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color:'danger'
    });

    await toast.present();
  }
}
