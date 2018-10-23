import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import firebase from 'firebase';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var config = {
  apiKey: "AIzaSyBMdtPYPPiBArZg4ZfK8f6MAJvQ6_11wYU",
  authDomain: "fir-list-c7516.firebaseapp.com",
  databaseURL: "https://fir-list-c7516.firebaseio.com",
  projectId: "fir-list-c7516",
  storageBucket: "fir-list-c7516.appspot.com",
  messagingSenderId: "151676499785"
};


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  name;
  surname;
  email;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.name, this.surname, this.email,this.password).then(User =>{
      //this.navCtrl.push(HomePage)
        
      })
    }
  
  
  
  
}
