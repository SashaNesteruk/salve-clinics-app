import { Patient } from "./patient";

export class Clinic {
    id: number;
    name: string;
    patients: Patient[];

    constructor(id: number, name: string, patients: Patient[]) {
        this.id = id;
        this.name = name;
        this.patients = patients;
      }
  }