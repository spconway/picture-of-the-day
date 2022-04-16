import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAPOD, IUPDATE } from '../state/istate';
import { State } from '../state/state';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private state: State) {}

  get getApod$(): Observable<IAPOD> {
    return this.state.apodStore$;
  }

  init$(): Observable<IAPOD> {
    const url = environment.nasa_apod_api;
    const api_key = environment.nasa_apod_api_key;
    return this.http
      .get<IAPOD>(`${url}?api_key=${api_key}`)
      .pipe(tap((apod) => this.state.setStore(apod)));
  }

  addStars(starsObj: IUPDATE) {
    this.state.setStore(starsObj);
  }
}
