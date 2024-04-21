// import React from 'react';
// import { Formik, Form } from 'formik';
// import Button from '@mui/material/Button';
// import {
//   TextFieldComponent,
//   SelectComponent,
//   RatingComponent,
// } from 'common/components';
// import { Lookup } from 'common/models';
// import { formValidation } from './character.validations';
// import { Hotel } from './character.vm';
// import * as classes from './character.styles';

// interface Props {
//   hotel: Hotel;
//   cities: Lookup[];
//   onSave: (hotel: Hotel) => void;
// }

// export const HotelComponent: React.FunctionComponent<Props> = (props) => {
//   const { hotel, cities, onSave } = props;

//   return (
//     <Formik
//       onSubmit={onSave}
//       initialValues={hotel}
//       enableReinitialize={true}
//       validate={formValidation.validateForm}
//     >
//       {() => (
//         <Form className={classes.root}>
//           <TextFieldComponent name="name" label="Name" />
//           <TextFieldComponent name="address" label="Address" />
//           <RatingComponent name="rating" max={5} />
//           <SelectComponent name="city" label="City" items={cities} />
//           <TextFieldComponent
//             name="description"
//             label="Description"
//             multiline={true}
//             rows={3}
//           />
//           <Button type="submit" variant="contained" color="primary">
//             Save
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
import React, { useEffect, useState } from 'react';
import { Character } from './character.vm'; // Importa la interfaz del personaje
import Typography from '@mui/material/Typography';
import * as classes from './character.styles';
import { useParams } from 'react-router-dom';

interface Props {
  character: Character; // Cambia el tipo de hotel a Character
}





// TODO 1: Cambia el nombre de la función de HotelComponent a CharacterComponent e investigar porque llega vacio
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


