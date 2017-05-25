import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { AuctionComponent } from './auction/auction.component';
import { AuctionSerivce } from './services/auction.service'

@NgModule({
  declarations: [
    AppComponent,
    AuctionsListComponent,
    AuctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuctionSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
