import { Component, ViewChild } from '@angular/core';
import { Clinic } from './models/clinic';
import {HttpClient} from '@angular/common/http';
import { ClinicsService } from './clinics.service';
import { Patient } from './models/patient';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salve-clinics-app'; 
  clinics: Clinic[] = [];
  patients: Patient[]=[];
  selectedClinic?: any;
  displayedColumns: string[] = ['patientNumber', 'firstName', 'lastName', 'dateOfBirth'];
  dataSource:any;

  constructor(private http: HttpClient, private clinicService: ClinicsService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngOnInit(): void {
    this.getClinics();
  }

  getClinics(): void {
    this.clinicService.getClinics()
      .subscribe(clinics => this.clinics = clinics);
  }

  getPatientsForClinic(): void{
    this.clinicService.getPatientsForClinic(this.selectedClinic)
      .subscribe(x => {
        this.patients = x;
        
        this.dataSource = new MatTableDataSource(this.patients);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
