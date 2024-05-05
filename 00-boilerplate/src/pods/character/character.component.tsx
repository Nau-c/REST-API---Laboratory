import React, { useEffect, useState } from 'react';
import { Character } from './character.vm'; // Importa la interfaz del personaje
import Typography from '@mui/material/Typography';
import * as classes from './character.styles';
import { useParams } from 'react-router-dom';

interface Props {
  character: Character;
  onSave: (character: Character) => Promise<void>;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { id } = useParams<{ id: string }>();
  const [characters, setCharacter] = useState<Character | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [bestSentences, setBestSentences] = useState<string>('');

  // useEffect(() => {
  //   const fetchCharacter = async () => {
  //     if (!id) {
  //       // Si no hay ID, no hacemos la solicitud y salimos temprano
  //       return;
  //     }

  //     try {
  //       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  //       const data = await response.json();
  //       setCharacter(data);
  //     } catch (error) {
  //       console.error('Error fetching character details:', error);
  //     }
  //   };

  //   fetchCharacter();
  // }, []);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) {
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/results/${id}`);
        const data = await response.json();
        setCharacter(data);
        setBestSentences(data.bestSentences); // Inicializa el estado bestSentences
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/results/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bestSentences }),
      });
      if (response.ok) {
        setEditing(false);
        // Actualizar los datos del personaje después de guardar
        const updatedCharacter = await response.json();
        setCharacter(updatedCharacter);
      } else {
        console.error('Failed to save character data');
      }
    } catch (error) {
      console.error('Error saving character data:', error);
    }
  };


  // return (
  //   <div className={classes.root}>
  //     <Typography variant="h4">{characters?.name}</Typography>
  //     <Typography variant="subtitle1">Species: {characters?.species}</Typography>
  //     <Typography variant="subtitle1">Status: {characters?.status}</Typography>
  //     <Typography variant="subtitle1">Gender: {characters?.gender}</Typography>
  //     <Typography variant="subtitle1">Location: {characters?.location?.name}</Typography>
  //     <Typography variant="subtitle1">Origin: {characters?.origin?.name}</Typography>
  //     {characters?.image && <img src={characters?.image} alt={characters?.name} />}

  //   </div>
  // );

  return (
    <div className={classes.root}>
      <button onClick={() => window.history.back()} style={{ margin: '10px', width: '450px', marginLeft: "0" }}>Return to List</button>
      {characters ? (
        <>
          <Typography variant="h4">{characters?.name}</Typography>
          <Typography variant="subtitle1">Species: {characters?.species}</Typography>
          <Typography variant="subtitle1">Status: {characters?.status}</Typography>
          <Typography variant="subtitle1">Gender: {characters?.gender}</Typography>
          <Typography variant="subtitle1">Location: {characters?.location?.name}</Typography>
          <Typography variant="subtitle1">Origin: {characters?.origin?.name}</Typography>

          {editing ? (
            <textarea
              style={{ width: '450px', height: '40px' }}
              value={bestSentences}
              onChange={(e) => setBestSentences(e.target.value)}
            />
          ) : (
            <Typography variant="subtitle1">Best Sentences: {characters.bestSentences}</Typography>
          )}
          {editing ? (
            <button onClick={handleSave} style={{ margin: '10px', width: '450px', marginLeft: "0" }}>Save</button>
          ) : (
            <button onClick={handleEdit} style={{ margin: '10px', width: '450px', marginLeft: "0" }}>Edit Best Sentences</button>
          )}
          {characters?.image && <img src={characters?.image} style={{ width: '450px' }} alt={characters?.name} />}

        </>
      ) : (
        <Typography variant="subtitle1">Loading...</Typography>
      )}
    </div>
  );
};


