import { ComponentsModule } from 'src/app/Components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { CountUpModule } from 'ngx-countup';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CountUpModule,
    ComponentsModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
