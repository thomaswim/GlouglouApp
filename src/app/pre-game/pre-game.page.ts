import { Component, OnInit } from '@angular/core';

export var joueurs = [];
export var nbr_questions;
export var mode_select;
@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.page.html',
  styleUrls: ['./pre-game.page.scss'],
})
export class PreGamePage implements OnInit {
  name:string;
  id_palyer : any = 0;
  public joueurs : any = joueurs;
  nbr_questions : any = 0;
  public mode_select : any =[1];

  add_player(){
    let player = {
      id : this.id_palyer,
      name : this.name
    };
    this.id_palyer = this.id_palyer +1;
    this.joueurs.push(player)
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

  next(){
    if (this.joueurs.length < 3 || this.nbr_questions == 0) {
      console.log("Remplissez les champs")
      
    }else{
      this.fix_id(this.joueurs);
      console.log(this.joueurs)
      joueurs = this.joueurs
      console.log(joueurs)
    }
  }
  style(id1, value){
    console.log("id : " ,id1)
    console.log("value : ",value)
    
    console.log(this.mode_select)
    if (this.mode_select.indexOf(value) == -1) {
      console.log("value = -1");
      
      document.getElementById(id1).style.background="bisque"
      this.mode_select.push(value);
    }
    else{
      console.log("value dif de -1");
      
      document.getElementById(id1).style.background="white"
      var index = this.mode_select.indexOf(value) ; 
      this.mode_select.splice(index)
      //delete this.mode_select[index];
    }
    mode_select = this.mode_select
   console.log(this.mode_select)
  }
  constructor() { }


  ngOnInit() {
  }
  ionViewWillEnter(){
    this.mode_select = [];
    this.id_palyer = 0
  }

}
