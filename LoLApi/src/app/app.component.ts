import { Component } from '@angular/core';
import { Champions, RootObject } from './interfaces/interfaces';
import { LolserviceService } from './services/lolservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoLApi';
  public rootObject!: RootObject;
  public champions!:Champions;
  constructor(private lolService:LolserviceService){
    this.getChampions();
  }

  getChampions(){
    this.lolService.getChampions().subscribe(data=>{
      this.rootObject=data;
    });
  }

  loadChampions(){
    this.champions.champions.forEach(element=>{
      
    })
  }
}
