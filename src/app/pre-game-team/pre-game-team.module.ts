import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreGameTeamPageRoutingModule } from './pre-game-team-routing.module';

import { PreGameTeamPage } from './pre-game-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreGameTeamPageRoutingModule
  ],
  declarations: [PreGameTeamPage]
})
export class PreGameTeamPageModule {}
