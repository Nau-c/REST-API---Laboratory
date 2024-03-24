export interface Hotel {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string;
}

export const createEmptyHotel = (): Hotel => ({
  id: '',
  name: '',
  description: '',
  rating: 3,
  address: '',
  city: '',
});

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  rating: number;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  rating: 0,
});
