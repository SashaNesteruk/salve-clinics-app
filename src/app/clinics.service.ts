import { Injectable } from '@angular/core';
import { Clinic } from './models/clinic';
import { Patient } from './models/patient';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor(private http: HttpClient) { }

  getClinics(): Observable<any> {
    
    const clinics = this.http.get("http://localhost:57439/clinics/");
    
    return clinics;
  }

  getPatientsForClinic(clinicId: number): Observable<any> {
    
    const clinicWithPatients = this.http.get("http://localhost:57439/ClinicPatients?clinicId=" + clinicId);
    
    return clinicWithPatients;
  }
}
