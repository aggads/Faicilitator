import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  drinkList: any[];
  config = environment.item
  queue4: any;
  queue5: any;
  queue6: any;


  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getData4().subscribe(
      data => {
        var result = Object.keys(data).map((key) => {
          return data[key]
        });

        let last = result[result.length - 1];

        if (!last) {
          this.queue4 = "unavailable"
        } else {
          if (last.measure.waitTime <= 1) {
            this.queue4 = last.measure.waitTime + " minute"
          } else {
            this.queue4 = last.measure.waitTime + " minutes"
          }
        }
        console.log("Wait time in queue 4", this.queue4)
      },
      error => {
        console.log('Error: ', error);
      });


    this.data.getData5().subscribe(
      data => {
        var result = Object.keys(data).map((key) => {
          return data[key]
        });

        let last = result[result.length - 1];

        if (!last) {
          this.queue5 = "unavailable";
        } else {
          if (last.measure.waitTime <= 1) {
            this.queue5 = last.measure.waitTime + " minute"
          } else {
            this.queue5 = last.measure.waitTime + " minutes"
          }
        }
        console.log("Wait time in queue 5", this.queue5)
      },
      error => {
        console.log('Error: ', error);
      });

    this.data.getData6().subscribe(
      data => {
        var result = Object.keys(data).map((key) => {
          return data[key]
        });

        let last = result[result.length - 1];

        if (!last) {
          this.queue6 = "unavailable"
        } else {
          if (last.measure.waitTime <= 1) {
            this.queue6 = last.measure.waitTime + " minute"
          } else {
            this.queue6 = last.measure.waitTime + " minutes"
          }
        }
        console.log("wait time in queue 6", this.queue6)
      },
      error => {
        console.log('Error: ', error);
      });

  }

  drinkFilter() {
    let drink = 'drinks'
    this.drinkList = this.config.filter((item) => item.category === drink);
    this.config = this.drinkList;
    // console.log("filtered list drink ", this.drinkList);
  }

}
