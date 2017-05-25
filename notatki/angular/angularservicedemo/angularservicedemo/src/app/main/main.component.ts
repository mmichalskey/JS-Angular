import {Component, OnInit, Inject} from '@angular/core';
import {AdderService} from '../services/calculator.service';
import {MultiplierService} from '../services/calculator.service.1';
import {DividerService} from '../services/calculator.service.2';
import {ReflectiveInjector} from '@angular/core';
import {PowerService} from '../services/calculator.service.3';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  addedValue = 0;
  adder: AdderService;

  multipliedValue = 0;
  multiplier: MultiplierService;

  dividedValue = 0;
  poweredValue = 0;

  constructor(private divider: DividerService, @Inject('POWER') private power: number, private powerer: PowerService) {
    this.adder = new AdderService();
    this.addedValue = 0;

    const injector: any = ReflectiveInjector.resolveAndCreate([MultiplierService]);
    this.multiplier = injector.get(MultiplierService);
  }

  ngOnInit() {
  }

  calculate() {

    this.addedValue = this.adder.add(2, 3);
    this.multipliedValue = this.multiplier.multiply(2, 3);
    this.dividedValue = this.divider.divide(2, 3);
    this.poweredValue = this.powerer.toPower(2);

  }

}
