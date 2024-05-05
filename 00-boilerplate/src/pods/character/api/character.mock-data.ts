import { Character } from './characters.api-model';
import { Lookup } from 'common/models';

export const mockCities: Lookup[] = [
  {
    id: 'Seattle',
    name: 'Seattle',
  },
  {
    id: 'New York',
    name: 'New York',
  },
];

export const mockCharacterCollection: Character[] = [
  {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // Otros episodios en los que aparece Rick...
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: new Date('2017-11-04T18:48:46.250Z'),
  },
  {
    id: '2',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // Otros episodios en los que aparece Morty...
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: new Date('2017-11-04T18:50:21.651Z'),
  },
];
