import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
<<<<<<< HEAD

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ExpandableComponent} from '../components/expandable/expandable';
>>>>>>> 1166c332c76e4a8528db2475b1abd0c52745ad15

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage
=======
    HomePage,
    ExpandableComponent
>>>>>>> 1166c332c76e4a8528db2475b1abd0c52745ad15
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
