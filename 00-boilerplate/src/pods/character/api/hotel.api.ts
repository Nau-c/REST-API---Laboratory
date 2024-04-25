import { Hotel, Character } from './hotel.api-model';
import { Lookup } from 'common/models';
import {
  mockCities,
  mockHotelCollection,
  mockCharacterCollection,
} from './hotel.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((c) => c.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
