import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';
import { HomePage } from '../home/home';
/**
 * Generated class for the ActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public geoFence: Geofence) {
  }

  removeFence() {
    this.geoFence.removeAll();
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

}
