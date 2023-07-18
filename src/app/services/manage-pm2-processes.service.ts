import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagePm2ProcessesService {

  constructor(private http: HttpClient) { }

  public getPm2Services():Observable<any> {
    return this.http.get(`${env.API_URL}/pm2/list`);
  }

  public startPm2Service(id: number):Subscription{
    return this.http.get(`${env.API_URL}/pm2/${id}/start`).subscribe();
  }

  public stopPm2Service(id: number):Subscription{
    return this.http.get(`${env.API_URL}3000/pm2/${id}/stop`).subscribe();
  }

  public restartPm2Service(id: string):Subscription{
    return this.http.get(`${env.API_URL}/pm2/${id}/restart`).subscribe();
  }
  
}
