import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PEOPLE } from './../../mocks/task.mocks';

/**
 * Generated class for the AddtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})
export class AddtaskPage {
PEOPLE

primary:string;
secondary:string;
tertiary:string;
intern:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }


  onClick1(){
    PEOPLE.push({primary:this.primary,secondary:this.secondary,tertiary:this.tertiary,intern:this.intern})
    
    this.navCtrl.pop()
  }
  }

