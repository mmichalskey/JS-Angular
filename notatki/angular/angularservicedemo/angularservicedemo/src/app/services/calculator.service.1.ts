import { Injectable } from '@angular/core';

@Injectable()
export class MultiplierService {

    constructor() { }

    multiply(a: number, b: number) {
        return a * b;
    }
}