import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DaftarnasabahPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftarnasabah',
  templateUrl: 'daftarnasabah.html',
})
export class DaftarnasabahPage {
  
  succesOrnot: boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
  public toastCtrl:ToastController,  public http: Http) {
   
 }

    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarnasabahPage');
  }

presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

    this.http.get('http://exact.id/SE/exgetprofile?xuserid=2&xtoken=ec5b6efe5eddbe7ca294f9cf297acdfce3eb04444affe51ab432321ecbdc9729&xtipeuser=MEMBER&xparam=getprofileweb').map(res => res.json()).subscribe(data => {
        console.log(data.DATA);
 });
  
  loading.present();

  setTimeout(() => {
    loading.dismiss();
    this.presentToast();
  }, 3000);
  
}

presentToast() {
  let toast = this.toastCtrl.create({
    message: this.succesOrnot ? 'Daftar Berhasil' : 'Daftar Gagal',
    duration: 100000,
    position: 'Bottom',
    showCloseButton: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
    this.navCtrl.pop();
  });

  toast.present();
}




}