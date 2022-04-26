import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class NgConfigService {

  _cf: Config = {};

  get config() { return this._cf; }

  constructor(private http: HttpClient) { }

  load(): Promise<any> {
    return this.http.get<Config>('assets/config.json')
      .toPromise()
      .then(data => {
        console.log(data);
        this._cf = data;
      });
  }

  // Gets a value of specified property in the configuration file
  get(key: string) {
    return this._cf[key];
  }

  addProperty(conf: Partial<Config>) {
    Object.assign(this._cf, conf);
  }

}
