import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PM2ServiceModel } from 'src/app/models/models';
import { ManagePm2ProcessesService } from 'src/app/services/manage-pm2-processes.service';

@Component({
  selector: 'app-service',
  templateUrl: './pm2processes.component.html',
  styleUrls: ['./pm2processes.component.scss'],
})
export class Pm2processesComponent implements OnInit {
  services:any;
  
  constructor(private pm2Service:ManagePm2ProcessesService) {}
  
  async ngOnInit() {
    this.pm2Service.getPm2Services().subscribe((data) => {
      this.setPm2Services(data);
    })
  }

  private setPm2Services(data: any){
    this.services = data;
  }

  public onStartPm2Service(id: number):void{
    this.pm2Service.startPm2Service(id);  
    this.services[id].pm2_env.status = 'online';
  }

  public async onStopPm2Service(id: number):Promise<void>{
    this.pm2Service.stopPm2Service(id);
    this.services[id].pm2_env.status = 'stopped';
  }

  public onRestartPm2Service(id: string):void{
    this.pm2Service.restartPm2Service(id);
  }
}
