import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.scss']
})
export class EatComponent implements OnInit {
  config = environment.item
  foodList: any[];
  queue1: any;
  queue2: any;
  queue3: any;


  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getData1().subscribe(
      data => {
        var result = Object.keys(data).map((key) => {
          return data[key]
        });

        let last = result[result.length - 1];

        if (!last) {
          this.queue1 = "unavailable"
        } else {
          if (last.measure.waitTime <= 1) {
            this.queue1 = last.measure.waitTime + " minute"
          } else {
            this.queue1 = last.measure.waitTime + " minutes"
          }
        }
        console.log("Wait time in queue 1", this.queue1)
      },
      error => {
        console.log('Error: ', error);
      });


    this.data.getData2().subscribe(
      data => {
        var result = Object.keys(data).map((key) => {
          return data[key]
        });

        let last = result[result.length - 1];
        if (!last) {
          this.queue2 = "unavailable";
        } else {
          if (last.measure.waitTime <= 1) {
            this.queue2 = last.measure.waitTime + " minute"
          } else {
            this.queue2 = last.measure.waitTime + " minutes"
          }
        }
        console.log("Wait time in queue 2", this.queue2)
      },
      error => {
        console.log('Error: ', error);
      });

    this.data.getData3().subscribe(
      data => {
        var result = Object.keys(data).map((key) => {
          return data[key]
        });

        let last = result[result.length - 1];

        if (!last) {
          this.queue3 = "unavailable"
        } else {
          if (last.measure.waitTime <= 1) {
            this.queue3 = last.measure.waitTime + " minute"
          } else {
            this.queue3 = last.measure.waitTime + " minutes"
          }
        }
        console.log("wait time in queue 3", this.queue3)
      },
      error => {
        console.log('Error: ', error);
      });

  }

  foodFilter() {
    let food = 'food'
    this.foodList = this.config.filter((item) => item.category === food);
    this.config = this.foodList;
  }

}
