import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireModule } from 'angularfire2';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { MasonryModule } from 'angular2-masonry';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { FriendComponent } from './friend/friend.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  // { path: '**', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  {
    path: 'layout', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'skill', component: SkillComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'friend', component: FriendComponent }
    ]
  },
  { path: 'pdf', component: PdfComponent}
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAYJ1r9qkbwCwXsPVmdU24HXJPu8YujGtM',
  authDomain: 'web-aboutme.firebaseapp.com',
  databaseURL: 'https://web-aboutme.firebaseio.com',
  storageBucket: "web-aboutme.appspot.com",
  messagingSenderId: "695374920782"
};

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    SkillComponent,
    ProjectComponent,
    FriendComponent,
    CvComponent,
    ContactComponent,
    PdfComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    MasonryModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
