import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sidekick } from '../sidekick';
import { SidekickService } from '../sidekick.service';

@Component({
  selector: 'app-sidekcik-detail',
  templateUrl: './sidekick-detail.component.html',
  styleUrls: ['./sidekick-detail.component.css']
})
export class SidekickDetailComponent implements OnInit {

  sidekick: Sidekick;

  constructor(
    //Holds information about the route to this instance of HDC
    private route: ActivatedRoute,
    //Allows us to get the data of this hero from the remote server
    private sidekickService: SidekickService,
    //Used to return to the previous page that navigated here
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSidekick();
  }

  getSidekick(): void {
    //extracts the id of the hero from the url, converts it to a number
    const id = +this.route.snapshot.paramMap.get('id');
    //uses Hero Service to retrieve that hero data using their id
    this.sidekickService.getSidekick(id)
        .subscribe( sidekick => this.sidekick = sidekick);
  }

  goBack(): void {
    //returns to the previous page
    this.location.back();
  }

  save(): void {
    this.sidekickService.updateSidekick(this.sidekick)
      .subscribe(() => this.goBack());
  }

}