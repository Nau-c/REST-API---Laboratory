import { Character } from './characters.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((c) => c.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

export const getAllCharactersJsonServer = async (): Promise<any[]> => {
  try {
    const response = await fetch(`http://localhost:3000/results`);
    const character = await response.json();
    return character as Character[];
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

export const getCharacterCollectionApi = async (): Promise<Character[]> => {
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));
  return mockCharacterCollection;
};
