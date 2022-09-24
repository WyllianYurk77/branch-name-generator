import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class SharedComponentService {

  private object = new  BehaviorSubject<any>(undefined);

  constructor() { }

  getData(): Observable<any> {
    return this.object.asObservable();
  }

  setData(value: any): void {
    this.object.next(value);
  }

  // get data(): any {
  //   return this.object;
  // }

  // set data(value: any) {
  //   this.object = value;
  // }
}
