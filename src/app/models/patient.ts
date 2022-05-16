export class Patient {
   id: number;
   patientNumber: number;
   clinicId: number;
   firstName: string;
   lastName: string;
   dateOfBirth: string;

    constructor(id: number, patientNumber: number, clinicId: number, firstName: string, lastName: string, dateOfBirth: string) {
        this.id = id;
        this.patientNumber = patientNumber;
        this.clinicId = clinicId;
        this.firstName= firstName;
        this.lastName = lastName;
        this.dateOfBirth= dateOfBirth;
      }
  }