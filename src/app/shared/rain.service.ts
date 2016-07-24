import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { Rainfall } from './rainfall';

@Injectable()
export class RainService {

  constructor(private http: Http) {}

  getAllRainfall() {
    return this.http
               .get(`http://mattdaniell.ddns.net:3000/api/rainfall`)
               //.map((responseData) => responseData.json());
               .map((r: Response) => r.json().data as Rainfall[]);
                //.catch(this.handleError).share();
  }


}
