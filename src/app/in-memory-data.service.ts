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
      sidekickIds: [211, 311] },
      { id: 12, name: 'Narco',
      sidekickIds: [212]  },
      { id: 13, name: 'Bombasto',
      sidekickIds: [213]  },
      { id: 14, name: 'Celeritas',
      sidekickIds: [214]  },
      { id: 15, name: 'Magneta',
      sidekickIds: [215]  },
      { id: 16, name: 'RubberMan',
      sidekickIds: [216]  },
      { id: 17, name: 'Dynama',
      sidekickIds: [217]  },
      { id: 18, name: 'Dr IQ',
      sidekickIds: [218]  },
      { id: 19, name: 'Magma',
      sidekickIds: [219, 319, 419]  },
      { id: 20, name: 'Tornado',
      sidekickIds: [220, 320]  }
    ];

    const sidekicks = [
      {id: 211, heroId: 11, name: "Mr.Mean"},
      {id: 311, heroId: 11, name: "Mrs.Mean"},
      {id: 212, heroId: 12, name: "Narco Sidekick"},
      {id: 213, heroId: 13, name: "Bombasto Jr."},
      {id: 214, heroId: 14, name: "Super Guy"},
      {id: 215, heroId: 15, name: "Magneto"},
      {id: 216, heroId: 16, name: "EraserHead"},
      {id: 217, heroId: 17, name: "Explosion"},
      {id: 218, heroId: 18, name: "Sir Stupid"},
      {id: 219, heroId: 19, name: "Lava Girl"},
      {id: 319, heroId: 19, name: "Shark Boy"},
      {id: 419, heroId: 19, name: "Volcano Man"},
      {id: 220, heroId: 20, name: "Twister"},
      {id: 320, heroId: 20, name: "Tornado"} 
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