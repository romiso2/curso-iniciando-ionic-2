import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{Component: any, title: String, icon: String}>;
  rootPage: any = HomePage;

  constructor(platform: Platform) {

    this.pages = [
      {Component: HomePage, title:'Home', icon:'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page: any) : void {
    this.rootPage = page.Component;
  }
}

ionicBootstrap(MyApp);
