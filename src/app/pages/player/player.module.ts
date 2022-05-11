import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutes } from './player.routes';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
