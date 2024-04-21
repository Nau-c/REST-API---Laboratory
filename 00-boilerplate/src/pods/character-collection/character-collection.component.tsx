import * as React from 'react';
import Button from '@mui/material/Button';
import { HotelEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/hotel-card.component';
import * as classes from './character-collection.styles';

interface Props {
  hotelCollection: HotelEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { hotelCollection, onCreateHotel, onEdit, onDelete } = props;
  const [characters, setCharacters] = React.useState([]);


  // React.useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results))
  //     .catch((error) => console.error('Error:', error))
  // }, []);

  React.useEffect(() => {
    fetch('http://localhost:3000/results')
      .then(response => response.json())
      .then(data => {
        // Establecer los personajes en el estado
        setCharacters(data);
      })
      .catch(error => {
        // Manejar errores
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button>

      <ul className={classes.list}>
        {characters.map((character) => (
          <li key={character?.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
