import { Component, OnInit } from '@angular/core';

import { Sidekick } from '../sidekick';
import { SidekickService } from '../sidekick.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-sidekicks',
  templateUrl: './sidekicks.component.html',
  styleUrls: ['./sidekicks.component.css']
})
export class SidekicksComponent implements OnInit {

  sidekicks: Sidekick[];
  heroes: Hero[];
  newHeroId: number;

  constructor(private sidekickService: SidekickService,
              private heroService: HeroService) { }

  ngOnInit(): void {
    this.getSidekicks();
    this.getHeroes();
  }

  getSidekicks(): void {
    this.sidekickService.getSidekicks()
        .subscribe( sidekicks => this.sidekicks = sidekicks);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe( heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.sidekickService.addSidekick( {name: name, heroId: this.newHeroId } as Sidekick)
      .subscribe(sidekick => {
        this.sidekicks.push(sidekick);
        this.heroService.getHero(this.newHeroId)
            .subscribe(hero => {
              hero.sidekickIds.push(sidekick.id);
              this.heroService.updateHero(hero).subscribe();
            })
      });
  }

  delete(sidekick: Sidekick): void {
    this.sidekicks = this.sidekicks.filter(s => s !== sidekick);
    this.sidekickService.deleteSidekick(sidekick).subscribe();
  }

}
  