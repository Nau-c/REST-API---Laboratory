import * as apiModel from './api/hotel.api-model';
import { Character } from './api/hotel.api-model';
import * as viewModel from './character.vm';

export const mapHotelFromApiToVm = (
  hotel: apiModel.Hotel
): viewModel.Hotel => ({
  ...hotel,
  id: hotel.id,
  name: hotel.name,
  description: hotel.shortDescription,
  rating: hotel.hotelRating,
  address: hotel.address1,
  city: hotel.city,
});

export const mapHotelFromVmToApi = (hotel: viewModel.Hotel): apiModel.Hotel =>
  ({
    ...hotel,
    id: hotel.id,
    name: hotel.name,
    shortDescription: hotel.description,
    hotelRating: hotel.rating,
    address1: hotel.address,
    city: hotel.city,
  } as unknown as apiModel.Hotel);

export const mapCharacterFromApiToVm = (
  character: viewModel.Character
): Character => ({
  id: character?.id,
  name: character?.name,
  status: character?.status,
  species: character?.species,
  type: character?.type || '',
  gender: character?.gender,
  origin: {
    name: character?.origin?.name,
    url: '',
  },
  location: {
    name: character?.location?.name,
    url: '',
  },
  image: character?.image?.name,
  episode: [],
  created: new Date(),
  url: '',
});

// const mapLocation = (location: any): Location => ({
//   name: location.name,
//   url: location.url,
// });

const mapImage = (imageUrl: viewModel.image): any => ({
  name: imageUrl,
});

// const mapOrigin = (origin: any): Origin => ({
//   name: origin.name,
//   url: origin.url,
// });

export const mapCharacterFromVmToApi = (character: any): any => ({
  id: parseInt(character.id),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  location: mapLocation(character.location),
  image: character.image.name,
  origin: mapOrigin(character.origin),
});

const mapLocation = (location: any): any => ({
  name: location.name,
  url: location.url,
});

const mapOrigin = (origin: any): any => ({
  name: origin.name,
  url: origin.url,
});
