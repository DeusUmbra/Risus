import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../character.service';

/**
 * Generated class for the BuildCharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-build-character',
  templateUrl: 'build-character.html',
  providers: [CharacterService]
})
export class BuildCharacterPage {
  Points = 10;
  emptyError = false;
  diceError = false;
  diceError2 = false;
  nameError = false;
  Cliches = [];
  done=false;
  name;
  CS = new CharacterService();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildCharacterPage');
  }

  updateEvent(dice: number, name: string){
    if (name == "" || dice < 1) {
      this.emptyError = true;
    }
    else if (dice > 4) {
      this.emptyError = false;
      this.diceError2 = true;
    }
    else {
      this.emptyError = false;
      this.diceError2 = false;
      if (this.Points >= dice) {
        this.Cliches.push(" " + name + ": " + dice);
        this.Points -= dice;
        this.diceError = false;
      }
      else {
        this.diceError = true;
      }
    }
  }

  submitCharacter(name: string){
    if(name == "") {
      this.nameError = true;
    }
    else {
      this.done = true;
      this.name = name;
      this.CS.addCharacter(this.name, this.Cliches);
    }
  }

  reset() {
    this.Points = 10;
    this.Cliches = [];
    this.done = false;
    this.name = null;
  }
}
