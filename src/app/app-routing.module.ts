import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'pre-game',
    loadChildren: () => import('./pre-game/pre-game.module').then( m => m.PreGamePageModule)
  },
  {
    path: 'pre-game-team',
    loadChildren: () => import('./pre-game-team/pre-game-team.module').then( m => m.PreGameTeamPageModule)
  },
  {
    path: 'secret',
    loadChildren: () => import('./secret/secret.module').then( m => m.SecretPageModule)
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
