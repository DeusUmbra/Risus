import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildCharacterPage } from './build-character';

@NgModule({
  declarations: [
    BuildCharacterPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildCharacterPage),
  ],
})
export class BuildCharacterPageModule {}
