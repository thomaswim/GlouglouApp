import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreGameTeamPage } from './pre-game-team.page';

const routes: Routes = [
  {
    path: '',
    component: PreGameTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreGameTeamPageRoutingModule {}
