import { Component, getPlatform, OnInit } from '@angular/core';

import { questions } from '../home/home.page';
import {joueurs} from '../pre-game/pre-game.page'
import {nbr_questions, mode_select} from '../pre-game/pre-game.page'
function initialisation(tab){
  tab = [
    {
      "id": 1,
      "theme": "Question",
      "question": "_1_ , dis-nous qui est ton crush ou bois 3 gorgées",
      "nbr_joueurs": 1,
      "categorie" : 1
    },
    {
      "id": 2,
      "theme": "Défi",
      "question": "_1_ et _2_ vous avez 2 minutes por préparer un freestyle.",
      "nbr_joueurs": 2,
      "categorie" : 1
    },
    {
      "id": 3,
      "theme": "Contrainte",
      "question": "A partir de maintenant, vous devez dire \"je bois\" avant de boire",
      "nbr_joueurs": 0,
      "categorie" : 1
    },
    {
      "id": 4,
      "theme": "Jeu",
      "question": "Citez un film d'horreur célébre. _1_ commence.",
      "nbr_joueurs": 1,
      "categorie" : 1
    },
    {
      "id": 5,
      "theme": "Dilleme",
      "question": "_1_ finis ton verre ou bois le double de gorgé pendan les 5 prochains tours",
      "nbr_joueurs": 1,
      "categorie" : 1
    }
  ]
    return tab;
}
/*
const player =[
  {
    "id": 0,
    "name": "Jarvis"
  },
  {
    "id": 1,
    "name": "Bridges"
  },
  {
    "id": 2,
    "name": "England"
  },
  {
    "id": 3,
    "name": "Oneil"
  },
  {
    "id": 4,
    "name": "Mayo"
  },
  {
    "id": 5,
    "name": "Grant"
  },
  {
    "id": 6,
    "name": "Orr"
  },
  {
    "id": 7,
    "name": "Silva"
  }
] */
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})






export class GamePage implements OnInit {
  index_question: any = 1;
  questions_var: any = [];
  player : any = joueurs;
  nbr_joueurs : any = 0;
  player_selection : any = []
  nbr_questions : any = nbr_questions;
  mode_select : any = mode_select;


  constructor() { }

  search_element(tab,id){ //retourne l index
    var index_element = -1 ;
    for (let index = 0; index < tab.length; index++) {
      if (tab[index].id == id )
      index_element = index
    }
    return index_element ;
  }

  verif_nbr_tab(tab,nbr){
    var nbr_exist_in_tab = false
    for (let index = 0; index < tab.length; index++) {
      if (tab[index] == nbr){
        nbr_exist_in_tab =true
      }
    }
    return nbr_exist_in_tab ;
  }
  get_players(nbr_players){
    var player_select =[]
    var player_id = []
    for (let index = 0; index <= nbr_players-1; index++) {
       var random = Math.floor(Math.random()*(this.player.length));
       while (this.verif_nbr_tab(player_id,random)==true ) {
         random = Math.floor(Math.random()*(this.player.length));
       }
       player_id.push(random);
       player_select.push(this.player[this.search_element(this.player,random)])

      
    }
  return player_select;

  }

  replace_players(text , nbr_players,tab_players){
    console.log("HEY LE TEXT EST : ",text)
   
  for (let index = 1; index <= nbr_players; index++) {
      text = text.replace('_'+index+'_',tab_players[index-1].name)
  }

  return text;
  }

  shuffle(questions,mode_sel){
    let new_questions = questions;
    for (var index = new_questions.length-1;index>=1;index --){
      var random = Math.floor(Math.random()*(index+1));
      
      //echange
      var save = new_questions[index];
      new_questions[index] = new_questions[random]
      new_questions[random] = save;
    }
    var new_new_questions ;
    
    for (let index = 0; index < new_questions.length; index++) {
      console.log("TEST   ",new_questions[index].categorie);
    /* if (mode_sel.IndexOf(new_questions[index].categorie) !=-1) {
        new_new_questions.push(new_questions[index])
      } */
    }
    console.log("new new : ",new_new_questions)

  } 
  next(){
    console.log("test")
    this.index_question = this.index_question+1
    console.log(this.index_question)
    this.nbr_joueurs = this.questions_var[this.index_question-1].nbr_joueurs;
    console.log("nobre de jouers : " ,this.nbr_joueurs  )
    this.player_selection = this.get_players(this.nbr_joueurs)
    console.log("Players selectioné  :  ", this.player_selection)
    if (this.nbr_joueurs>0){
      console.log("Text avant : ",questions[this.index_question-1].question)
      this.questions_var[this.index_question-1].question =  this.replace_players(this.questions_var[this.index_question-1].question,this.nbr_joueurs,this.player_selection);
      console.log("Text APRES : ",questions[this.index_question-1].question)
      console.log(this.questions_var[this.index_question-1])
    }
  }
  ionViewWillEnter() {
    console.log("mode select : ", this.mode_select);
    
    this.questions_var = initialisation(this.questions_var)
    console.log(questions)
    this.index_question = 1
    this.shuffle(this.questions_var,mode_select);
    this.nbr_joueurs = this.questions_var[0].nbr_joueurs;
    console.log("nobre de jouers : " ,this.nbr_joueurs  )
    this.player_selection = this.get_players(this.nbr_joueurs)
    console.log("Players selectioné  :  ", this.player_selection)
    if (this.nbr_joueurs>0){
      this.questions_var[0].question =  this.replace_players(this.questions_var[0].question,this.nbr_joueurs,this.player_selection);
      console.log(this.questions_var[this.index_question-1])
    }
}
  ngOnInit() {
    this.questions_var = questions;
    this.index_question = 1

     this.shuffle(this.questions_var,mode_select);

    console.log(this.player);

  }

}
