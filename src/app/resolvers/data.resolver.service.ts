import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

const departments = ['Marketing','Sales', 'Ui/Ux' ,'Others'];

@Injectable({providedIn: 'root'})
export class DataResolverService implements Resolve<any> {

  resolve(): Observable<any> {
    //todo: call service
    return of(departments)
  }
}
