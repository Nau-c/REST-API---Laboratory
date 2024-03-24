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
import React from 'react';
import { Character } from './character.vm'; // Importa la interfaz del personaje
import Typography from '@mui/material/Typography';
import * as classes from './character.styles';

interface Props {
  character: Character; // Cambia el tipo de hotel a Character
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">{character.name}</Typography>
      <Typography variant="subtitle1">Species: {character.species}</Typography>
      <Typography variant="subtitle1">Status: {character.status}</Typography>
      <Typography variant="subtitle1">Gender: {character.gender}</Typography>
      <Typography variant="subtitle1">Rating: {character.rating}</Typography>
    </div>
  );
};

