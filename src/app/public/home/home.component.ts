import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../participant/Servicio/services.service";
import {Participant} from "../../participant/model/Participant";
import {Center} from "../../participant/model/Center";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  participant: { firstName: string; lastName: string; photoUrl: string; centerId: number; recordTime: string; ranking: number; id: string }={id: '', firstName: '', lastName: '', photoUrl: '', centerId: 0, ranking: 0, recordTime: ''};
  center:Center = { id: 0, name: '' };
  constructor(private partService:ServicesService) {
  }

  ngOnInit(): void {
    this.partService.getParticipantWithRankingOne().subscribe(
      participant=>{
        this.participant = participant;
        this.partService.getCenterById(participant.centerId).subscribe((center) => {
          this.center = center;
        });
    });
  }


}
