import { Component } from '@angular/core';


export const questions = [
  {
    "id": 0,
    "Theme": "Question",
    "name": "Hensley",
    "question": "Quelle est ton plus gros secret ?",
    "nbr_joueurs" : 0
  },
  {
    "id": 1,
    "Theme": "Jeu",
    "name": "_1_ et _2_ faites vous 2 bisous",
    "question": "_1_ et _2_ faites vous 2 bisous",
    "nbr_joueurs" : 2
  },
  {
    "id": 2,
    "Theme": "Jeu",
    "name": "Patel",
    "question": "_1_ et _2_  et _3_ faites vous 3 bisous",
    "nbr_joueurs" : 3
  },
  {
    "id": 3,
    "Theme": "Parsons",
    "name": "Bird",
    "question": "(899) 513-2573",
    "nbr_joueurs" : 0
  },
  {
    "id": 4,
    "Theme": "Pate",
    "name": "Keith",
    "question": "(848) 424-3306",
    "nbr_joueurs" : 0
  },
];


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public Pages = [
    { title: 'Gloup', url: '/pre-game', icon: 'Game',sub : "Jeu d'apéro de base " },
    { title: 'Team Gloup', url: '/pre-game-team', icon: 'Game',sub : "Jeu d'apéro par équipe  " },
  ];
  constructor() {}

}
