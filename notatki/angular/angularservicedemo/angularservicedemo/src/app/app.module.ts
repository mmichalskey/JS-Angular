import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DividerService } from './services/calculator.service.2';
import { PowerService } from './services/calculator.service.3';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
     { provide: DividerService, useClass: DividerService },
     { provide: 'POWER', useValue: 4 },
     { provide: PowerService,
       deps: ['POWER'],
       useFactory(power: number) {
       return new PowerService(power);
     }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
