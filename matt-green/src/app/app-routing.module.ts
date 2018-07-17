import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component'
import { AboutMeComponent } from './about-me/about-me.component'

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'  },
  { path: '**', component: MainComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
