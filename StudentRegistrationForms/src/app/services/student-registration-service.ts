import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class StudentRegisterationService {



  constructor(private http: HttpClient) { }

  saveData(data: any): Observable<any> {
    return of({ message: 'Data saved successfully!' });
  }




}
