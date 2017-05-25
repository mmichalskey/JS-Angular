import { Injectable } from '@angular/core';

@Injectable()
export class DividerService {

    constructor() { }

    divide(a: number, b: number) {
        return a / b;
    }
}