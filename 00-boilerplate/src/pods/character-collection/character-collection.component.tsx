import * as React from 'react';
import Button from '@mui/material/Button';
import { Character } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { getAllCharactersJsonServer, getCharacterCollectionApi } from 'pods/character/api';

interface Props {
  characterCollection: Character[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;

}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete } = props;
  const [characters, setCharacters] = React.useState<any[]>([]);


  const handleDataApi = async () => {
    try {
      const response = await getCharacterCollectionApi();
      setCharacters(response);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  }

  React.useEffect(() => {
    handleDataApi()
  }, []);

  // Reemplazar los endpoints para que apunten al json-server.

  const handledata = async () => {
    try {
      const response = await getAllCharactersJsonServer();
      setCharacters(response);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  }

  React.useEffect(() => {
    handledata()
  }, []);

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
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
