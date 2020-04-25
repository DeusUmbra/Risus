import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiceRollerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dice-roller',
  templateUrl: 'dice-roller.html', 
})
export class DiceRollerPage {
  Dice:Array<number> = [];
  Rolls:Array<string> = [];
  Total:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiceRollerPage');
  }

  roll(leader: number, teammates: number) {
    this.Total = 0;
    this.Dice = [];
    this.Rolls = [];
    if (leader >=1 && leader <=6 && teammates >= 0 && teammates <=50) {
      for(var i = 0; i < leader; i++) {
        this.Dice.push(Math.floor(Math.random() * 6)+1);
      }
      for(var i = 0; i < teammates; i++) {
        var roll = Math.floor(Math.random() * 6)+1;
        if (roll == 6) {
          this.Dice.push(roll);
        }
      }
      for (var i = 0; i < this.Dice.length; i++) {
        this.Rolls.push("d"+this.Dice[i]+".jpg");
        this.Total += this.Dice[i];
      }
    }
    else {
      window.alert("Hey now, make sure those dice are legal!");
    }
  }
}
