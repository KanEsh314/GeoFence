import { Component } from '@angular/core';
import { NavController , ToastController , Platform } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';
import { Geolocation } from '@ionic-native/geolocation';
import { ActivePage } from '../active/active';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  radius: number = 100;
  error: any;
  success: any;

  constructor(public navCtrl: NavController , public toastCtrl: ToastController , public geoFence: Geofence ,private platform: Platform ,public geolocate: Geolocation) {

    this.platform.ready()
      .then(() => {

        this.geoFence.initialize()
          .then(() =>
              console.log("GeoFence Plugin Is Ready"),
              (err) =>
                console.log(err)
                );
      });
  }

  setGeofence(value: number){

    this.geolocate.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {

      var longitude = 2.980732;
      var latitude = 101.664165;
      var radius = value;

        let fence = {
          id : 'myGeofenceID1',
          latitude: latitude,
          longitude: longitude,
          radius: radius,
          transitionType: 2
        }

        this.geoFence.addOrUpdate(fence)
          .then(() =>
            this.success = true,
          (err) => 
            console.log(err)
            );

        this.geoFence.onTransitionReceived()
          .subscribe(res => {
              this.toastCtrl.create({
              message: 'You Arrived BAC VSQ',
              duration: 3000
              }).present();
          });

          this.navCtrl.push(ActivePage);

    }).catch((error) => {
        console.log(error);
        this.toastCtrl.create({
        message: error,
        duration: 3000
        }).present();
    }); 
  }
  //Latitude Longitude (3.107434 , 101.639939)VSQ
  //Latitude Longitude (2.980732 , 101.664165)3ELEMENT
}
