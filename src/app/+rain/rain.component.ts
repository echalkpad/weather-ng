import { Component, OnInit } from '@angular/core';

import { Rainfall, RainService } from '../shared';


@Component({
  moduleId: module.id,
  selector: 'app-rain',
  templateUrl: 'rain.component.html',
  styleUrls: ['rain.component.css'],
  providers: [RainService]
})
export class RainComponent implements OnInit {
  rainfall: Rainfall[];
  rainTotal: number;
  calibration: number = 0.2794;

  constructor(private rainService: RainService) { }

  ngOnInit() {
    this.getRain();
  }

  private getRain() {
        this.rainfall = null;
        this.rainService.getAllRainfall()
            .subscribe((rainfall) => {
                if (rainfall) {
                    console.log(rainfall);
                    this.rainfall = rainfall;
                    this.getTotalRain();
                }
            },
            error => {
               // this.isLoading = false;
            });
    }

   private getTotalRain() {
     this.rainTotal = this.rainfall.length * this.calibration;
    }


}
