import { Component } from '@angular/core';
import * as _ from 'lodash';
import {City} from './core/city';

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  emptyCity = <City>{name: '', count: 0};
  city: City = _.clone(this.emptyCity);
  cities: City[] = [];

  addCity() {
    if (this.city.name) {
      const _city = _.find(this.cities, {name: this.city.name});
      if (_city) {
        _city.count++;
      } else {
        this.city.count++;
        this.cities.push(_.clone(this.city));
      }
      this.orderCities();
      this.city = _.clone(this.emptyCity);
    }
  }

  orderCities() {
    this.cities = _.sortBy(this.cities, 'count').reverse();
  }

}
