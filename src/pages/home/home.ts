import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signUp(){
   //firebase.auth().createUserWithEmailAndPassword("").then(user =>{
    //this.navCtrl.push(Homepage)

  //})
  }
}
