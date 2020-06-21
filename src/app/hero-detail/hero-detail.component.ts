import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    //Holds information about the route to this instance of HDC
    private route: ActivatedRoute,
    //Allows us to get the data of this hero from the remote server
    private heroService: HeroService,
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
        .subscribe( hero => this.hero = hero);
  }

  goBack(): void {
    //returns to the previous page
    this.location.back();
  }

}
