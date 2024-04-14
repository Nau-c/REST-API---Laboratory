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

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error('Error fetching character details:', error));
  }, [id]);


  return (
    <div className={classes.root}>
      <Typography variant="h4">{characters?.name}</Typography>
      <Typography variant="subtitle1">Species: {characters?.species}</Typography>
      <Typography variant="subtitle1">Status: {characters?.status}</Typography>
      <Typography variant="subtitle1">Gender: {characters?.gender}</Typography>
      <Typography variant="subtitle1">Location: {characters?.location?.name}</Typography>
      <Typography variant="subtitle1">Origin: {characters?.origin?.name}</Typography>
      {characters?.image && <img src={characters?.image} alt={characters?.name} />}

    </div>
  );
};


