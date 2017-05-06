import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { AuctionComponent } from './auction/auction.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionsListComponent,
    AuctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
