// export interface Hotel {
//   id: string;
//   name: string;
//   description: string;
//   rating: number;
//   address: string;
//   city: string;
// }

// export const createEmptyHotel = (): Hotel => ({
//   id: '',
//   name: '',
//   description: '',
//   rating: 3,
//   address: '',
//   city: '',
// });

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  rating: number;
  location: location;
  image: string;
  origin: origin;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  rating: 0,
  location: { name: '' },
  image: '',
  origin: { name: '' },
  bestSentences: [],
});

export interface image {
  name: string;
}

export interface location {
  name: string;
}

export interface origin {
  name: string;
}
