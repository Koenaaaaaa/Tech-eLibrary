import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutShelfComponent } from './components/about-shelf/about-shelf.component'

import { HomeComponent } from './components/home/home.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [

  {
    path:'home',component:HomeComponent
  },
  {

    path: 'about', component: AboutShelfComponent
  },
  {

    path: 'our-team', component: OurTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
