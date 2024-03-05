import { NgModule } from '@angular/core';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]

})

export class AppRoutingModule { }
