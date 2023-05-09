import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {Participant} from "../model/Participant";
import {Center} from "../model/Center";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  addParticipant(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/participants',data);
  }
  getParticipants():Observable<any>{
    return this.http.get('http://localhost:3000/participants');

  }

  public getParticipantWithRankingOne(): Observable<any> {
    return this.http.get<Participant[]>('http://localhost:3000/participants').pipe(
      map(participants => participants.find(participant => participant.ranking === 1))
    );
  }

  getCenterById(id: number): Observable<any> {
    return this.http.get<Center[]>('http://localhost:3000/centers').pipe(
      map((centers: Center[]) => centers.find(center => center.id === id))
    );
  }


}
