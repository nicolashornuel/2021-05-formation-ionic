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
  private schedulesCache: Schedule[];
  private sessionsCache: Session[];
  private speakersCache: Speaker[];

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
            return sessions;
          }),
          tap(sessions => this.sessionsCache = sessions)
        )
    }
  }

  getSchedule(): Observable<Schedule[]> {
    if (this.schedulesCache) {
      return of(this.schedulesCache);
    } else {
      return this.http.get<Schedule[]>(`${this.urlBack}schedule`)
        .pipe(
          map((res:Schedule[]) => this.schedulesCache=res),
        )
    }
  }
  
  getSpeakers(): Observable<Speaker[]> {
    if (this.speakersCache) {
      return of(this.speakersCache);
    } else {
      return this.http.get<Speaker[]>(`${this.urlBack}speakers`)
        .pipe(
          map((res:Speaker[]) => this.speakersCache=res),
        )
    }
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



  getTeam() {
    return this.http.get(`${this.urlBack}team`);
  }

  getDb() {
    return this.http.get(`${this.urlBack}db`);
  }

}
