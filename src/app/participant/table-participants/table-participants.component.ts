import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ServicesService} from "../Servicio/services.service";

@Component({
  selector: 'app-table-participants',
  templateUrl: './table-participants.component.html',
  styleUrls: ['./table-participants.component.css']
})
export class TableParticipantsComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'marathonCenterName',
    'ranking',
    'recordTime'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private partService:ServicesService) {}

  ngOnInit(): void {
    this.getParticipantsList();
  }

  getParticipantsList(){
    this.partService.getParticipants().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
