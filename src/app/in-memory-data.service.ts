import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',
      sidekickIds: [] },
      { id: 12, name: 'Narco',
      sidekickIds: []  },
      { id: 13, name: 'Bombasto',
      sidekickIds: []  },
      { id: 14, name: 'Celeritas',
      sidekickIds: []  },
      { id: 15, name: 'Magneta',
      sidekickIds: []  },
      { id: 16, name: 'RubberMan',
      sidekickIds: []  },
      { id: 17, name: 'Dynama',
      sidekickIds: []  },
      { id: 18, name: 'Dr IQ',
      sidekickIds: []  },
      { id: 19, name: 'Magma',
      sidekickIds: []  },
      { id: 20, name: 'Tornado',
      sidekickIds: []  }
    ];

    const sidekicks = [
      {id: 211, heroId: 11, name: "sidekick1"},
      {id: 212, heroId: 11, name: "sidekick1"},
      {id: 213, heroId: 11, name: "sidekick1"},
      {id: 214, heroId: 11, name: "sidekick1"},
      {id: 215, heroId: 11, name: "sidekick1"},
    ]
    return {heroes, sidekicks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}