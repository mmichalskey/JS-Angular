import { Injectable } from '@angular/core';
import { Auction } from '../app.model'
 
@Injectable()
export class AuctionSerivce {
    auctions: Array<any>;

    constructor() { 

    this.auctions = [ 
      {"name": "Rower", "price": 800},
      {"name": "Lalka", "price": 70},
      {"name": "Pralka", "price": 1200},
      {"name": "Telefon", "price": 1500}
    ];

    }

    getAll() {
        return this.auctions;
    }
    
    remove(name: string){
        const index: number = this.auctions.findIndex(i => i.name === name);
        this.auctions.splice(index, 1);
    }

    add(value: Auction){
        this.auctions.push(new Auction(value.name, value.price));
    }

    update(value: any, name: any) {
        let index = this.getIndex(name);
        if (value.name != "") {
            this.auctions[index].name = value.name;
        }
        if (value.price != "") {
            this.auctions[index].price = value.price;
        }
    }

    getIndex(name: string){
        const index: number = this.auctions.findIndex(i => i.name === name);
        return index
    }
}