import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Pm2processesComponent } from './servers/processes/pm2processes.component';
import { TableModule } from 'primeng/table';
import { ManagePm2ProcessesService } from './services/manage-pm2-processes.service';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, Pm2processesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [
    ManagePm2ProcessesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
