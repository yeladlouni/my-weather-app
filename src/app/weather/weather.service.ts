import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from './weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  search(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      environment.apiUrl+"?q="+city+"&APPID="+environment.appId
    ).pipe(
      map(info => info)
    );
  }
}
