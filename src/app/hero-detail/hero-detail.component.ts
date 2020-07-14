import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { Sidekick } from '../sidekick';
import { HeroService } from '../hero.service';
import { SidekickService } from '../sidekick.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  sidekicks: Sidekick[];

  constructor(
    //Holds information about the route to this instance of HDC
    private route: ActivatedRoute,
    //Allows us to get the data of this hero from the remote server
    private heroService: HeroService,
    private sidekickService: SidekickService,
    //Used to return to the previous page that navigated here
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //extracts the id of the hero from the url, converts it to a number
    const id = +this.route.snapshot.paramMap.get('id');
    //uses Hero Service to retrieve that hero data using their id
    this.heroService.getHero(id)
        .subscribe( hero => {
          this.hero = hero;
          this.sidekickService.getSidekicks()
            .subscribe( sidekicks => this.sidekicks = sidekicks.filter( s => hero.sidekickIds.includes(s.id)));
        });
  }

  goBack(): void {
    //returns to the previous page
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
