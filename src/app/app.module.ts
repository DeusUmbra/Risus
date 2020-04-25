import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BuildCharacterPage } from '../pages/build-character/build-character';
import { CharacterService } from '../character.service';
import { CharacterViewerPage } from '../pages/character-viewer/character-viewer';
import { DiceRollerPage } from '../pages/dice-roller/dice-roller';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BuildCharacterPage,
    CharacterViewerPage,
    DiceRollerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BuildCharacterPage,
    CharacterViewerPage,
    DiceRollerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CharacterService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
