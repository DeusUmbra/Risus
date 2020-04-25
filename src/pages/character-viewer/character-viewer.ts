import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterService } from '../../character.service';
import { Character } from '../../Character';

/**
 * Generated class for the CharacterViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-viewer',
  templateUrl: 'character-viewer.html',
})
export class CharacterViewerPage {
  CS = new CharacterService;
  CharacterList:Array<Character>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CharacterList = this.CS.Characters;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterViewerPage');
  }

  update() {
    this.CS = new CharacterService;
    this.CharacterList = this.CS.Characters;
  }

}
