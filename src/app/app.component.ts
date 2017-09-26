import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
 import { SigninPage } from '../pages/user/signin/signin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  homepage: Array<{title: string, component: any}>;
  streetPerformanceList: Array<{title: string, component: any}>;
  buskingList : Array<{title: string, component: any}>;
  userList: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.homepage = [
      { title: '홈', component: HomePage },
    ];
    this.streetPerformanceList = [
      { title: '공연 일정', component: HomePage },
      { title: '팀 정보', component: HomePage },
      { title: '팀별 게시판', component: HomePage },
    ];
    this.buskingList = [
      { title: '버스킹 일정', component: HomePage },
      { title: '공연 등록', component: HomePage },
    ];
    this.userList = [
      { title: '로그인', component: HomePage },
      { title: '회원가입', component: SigninPage },
      { title: '로그아웃', component: HomePage },
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
