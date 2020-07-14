import { Component, OnInit } from '@angular/core';

import { Sidekick } from '../sidekick';
import { SidekickService } from '../sidekick.service';

@Component({
  selector: 'app-sidekicks',
  templateUrl: './sidekicks.component.html',
  styleUrls: ['./sidekicks.component.css']
})
export class SidekicksComponent implements OnInit {

  sidekicks: Sidekick[];

  constructor(private sidekickService: SidekickService) { }

  ngOnInit(): void {
    this.getSidekicks();
  }

  getSidekicks(): void {
    this.sidekickService.getSidekicks()
        .subscribe( sidekicks => this.sidekicks = sidekicks);
  }

}
