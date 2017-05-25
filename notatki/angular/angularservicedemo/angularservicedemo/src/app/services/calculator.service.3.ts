import { Injectable } from '@angular/core';

@Injectable()
export class PowerService {

    constructor(private power: number) { }

    toPower(a: number) {
        return a ** this.power;
    }
}