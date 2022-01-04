import { Component, OnInit } from '@angular/core';

export var joueurs = [];
export var nbr_questions;
@Component({
  selector: 'app-pre-game-team',
  templateUrl: './pre-game-team.page.html',
  styleUrls: ['./pre-game-team.page.scss'],
})
export class PreGameTeamPage implements OnInit {

  nbr_team : any =2
  name:string;
  id_palyer : any = 0;
  public joueurs : any ;
  nbr_questions : any = 0;

  add_player(num_team){
    let player = {
      id : this.id_palyer,
      name : this.name
    };
    console.log(num_team)
    this.id_palyer = this.id_palyer +1;
    this.joueurs[num_team].push(player)
    console.log(player)
    console.log(this.joueurs)
  }

  delete_player(j){
    console.log(j)
    this.joueurs = this.joueurs.filter(item => item !== j)
    console.log(this.joueurs)
    this.id_palyer = this.id_palyer -1;
  }

  fix_id(tab){
    for (let index = 0; index < tab.length; index++) {
      tab[index].id = index;
    }
  }
  segmentChanged(e){
    console.log(e.detail.value)
    this.nbr_questions = e.detail.value;
    nbr_questions = this.nbr_questions;
  }

  condition(){
    var condition = true;
    for (let index = 0; index < this.joueurs.length; index++) {
      if (this.joueurs[index].length <2){
        condition = false
      }
    }
    if (condition == false || this.nbr_questions == 0) {
      return false
    }else{
      return true
    }

  }
  next(){
    var condition = true;
    for (let index = 0; index < this.joueurs.length; index++) {
      if (this.joueurs[index].length <2){
        condition = false
      }
    }
    if (condition == false || this.nbr_questions == 0) {
      console.log("Remplissez les champs")
      
    }else{
      this.fix_id(this.joueurs);
      console.log(this.joueurs)
      joueurs = this.joueurs
      console.log(joueurs)
    }
  }

  onClick_minus(){
    if (this.nbr_team>2) {
      this.nbr_team = this.nbr_team-1;
      this.tab_team_init()
    }
    else{
      console.log("2 équipes minimum")
    }
  }
  onClick_plus(){
    if (this.nbr_team<5) {
      this.nbr_team = this.nbr_team+1;
      this.tab_team_init()
    }
    else{
      console.log("5 équipes max")
    }
  }
  constructor() { }

  tab_team_init(){
    this.joueurs = [];
    for (let index = 0; index < this.nbr_team; index++) {
      var tab_team = []
      this.joueurs.push(tab_team)
    }
  }

  ngOnInit() {
    this.tab_team_init()
    console.log(this.joueurs)
  }
  ionViewWillEnter(){
    this.id_palyer = 0
  }

}
