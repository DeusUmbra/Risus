import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterViewerPage } from './character-viewer';

@NgModule({
  declarations: [
    CharacterViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterViewerPage),
  ],
})
export class CharacterViewerPageModule {}
