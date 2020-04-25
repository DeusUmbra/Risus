import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiceRollerPage } from './dice-roller';

@NgModule({
  declarations: [
    DiceRollerPage,
  ],
  imports: [
    IonicPageModule.forChild(DiceRollerPage),
  ],
})
export class DiceRollerPageModule {}
