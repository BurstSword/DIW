import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RootObject} from '../interfaces/interfaces'
@Injectable({
  providedIn: 'root'
})
export class LolserviceService {

  constructor(private httpClient:HttpClient) { }

  getChampions(){
   return this.httpClient.get<RootObject>(environment.API_URL);
  }
}
