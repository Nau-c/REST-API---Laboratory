import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { mapHotelFromApiToVm, mapHotelFromVmToApi, mapCharacterFromApiToVm } from './character.mappers';
import { createEmptyHotel, Hotel, createEmptyCharacter, Character } from './character.vm';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const HotelContainer: React.FunctionComponent = (props) => {
  // const [hotel, setHotel] = React.useState<Hotel>(createEmptyHotel());
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCityCollection = async () => {
    const apiCities = await api.getCities();
    setCities(apiCities);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadCityCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapHotelFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save hotel');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
