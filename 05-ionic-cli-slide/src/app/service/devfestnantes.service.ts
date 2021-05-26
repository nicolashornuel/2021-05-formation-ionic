import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule, Session, Speaker } from '../model/index';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';


interface SessionData {
  [key: string]: Session
}

@Injectable({
  providedIn: 'root'
})
export class DevfestnantesService {

  private urlBack = "https://devfest-nantes-2018-api.cleverapps.io/"
  private sessionsCache: Session[];

  constructor(private http: HttpClient) { }

  listerSessions(): Observable<Session[]> {
    if (this.sessionsCache) {
      return of(this.sessionsCache);
    } else {
      return this.http.get<SessionData>(`${this.urlBack}sessions`)
        .pipe(
          map((sessionData: SessionData) => {
            const sessions: Session[] = [];
            for (let key in sessionData) {
              sessions.push(sessionData[key]);
            }
            return []
          }),
          tap(sessionsTab => console.log(sessionsTab))
        )
    }
  }

  getSpeakers() {
    return this.http.get<Speaker[]>(`${this.urlBack}speakers`);
  }

  getSessions() {
    return this.http.get<Session[]>(`${this.urlBack}sessions`);
  }

  getBlog() {
    return this.http.get(`${this.urlBack}blog`);
  }

  getPartners() {
    return this.http.get(`${this.urlBack}partners`);
  }

  getSchedule() {
    return this.http.get<Schedule[]>(`${this.urlBack}schedule`);
  }

  getTeam() {
    return this.http.get(`${this.urlBack}team`);
  }

  getDb() {
    return this.http.get(`${this.urlBack}db`);
  }

}
