import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { NgGridModule } from 'angular2-grid';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { FriendComponent } from './friend/friend.component';
import { CvComponent } from './cv/cv.component';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    SkillComponent,
    ProjectComponent,
    FriendComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    NgGridModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }