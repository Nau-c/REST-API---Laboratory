import * as apiModel from './api/characters.api-model';
import { Character } from './api/characters.api-model';
import * as viewModel from './character.vm';

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
  image: character?.image,
  episode: [],
  created: new Date(),
  url: '',
});

export const mapperCaracterlist = (
  character: viewModel.Character[]
): apiModel.Character[] => {
  return character.map((character) => mapCharacterFromVmToApi(character));
};

const mapImage = (imageUrl: viewModel.image): any => ({
  name: imageUrl,
});

export const mapCharacterFromVmToApi = (character: any): any => ({
  id: parseInt(character.id),
  name: character?.name,
  status: character?.status,
  species: character?.species,
  type: character?.type,
  gender: character.gender,
  location: mapLocation(character.location),
  image: character?.image?.name,
  origin: mapOrigin(character?.origin),
});

const mapLocation = (location: any): any => ({
  name: location?.name,
  url: location?.url,
});

const mapOrigin = (origin: any): any => ({
  name: origin?.name,
  url: origin?.url,
});
