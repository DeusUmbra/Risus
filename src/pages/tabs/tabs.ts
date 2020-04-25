import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { BuildCharacterPage } from '../build-character/build-character';
import { HomePage } from '../home/home';
import { CharacterViewerPage } from '../character-viewer/character-viewer';
import { DiceRollerPage } from '../dice-roller/dice-roller';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = BuildCharacterPage;
  tab4Root = CharacterViewerPage;
  tab5Root = DiceRollerPage;

  constructor() {

  }
}
