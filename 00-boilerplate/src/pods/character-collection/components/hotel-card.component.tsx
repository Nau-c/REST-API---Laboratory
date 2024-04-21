// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar/Avatar';
// import IconButton from '@mui/material/IconButton/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { HotelEntityVm } from '../character-collection.vm';
// import * as classes from './hotel-card.styles';

// interface Props {
//   hotel: HotelEntityVm;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
// }

// export const HotelCard: React.FunctionComponent<Props> = (props) => {
//   const { hotel, onEdit, onDelete } = props;

//   return (
//     <Card>
//       <CardHeader
//         avatar={<Avatar aria-label="Hotel">{hotel.rating}</Avatar>}
//         title={hotel.name}
//         subheader={hotel.address}
//       />
//       <CardContent>
//         <div className={classes.content}>
//           <CardMedia
//             image={hotel.picture}
//             title={hotel.name}
//             style={{ height: 0, paddingTop: '56.25%' }}
//           />
//           <Typography variant="subtitle1" gutterBottom>
//             {hotel.description}
//           </Typography>
//         </div>
//       </CardContent>
//       <CardActions>
//         <IconButton onClick={() => onEdit(hotel.id)}>
//           <EditIcon />
//         </IconButton>
//         <IconButton onClick={() => onDelete(hotel.id)}>
//           <DeleteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// };

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
//import { Character } from '../character-detail.interface';
import { Character } from '../character-collection.vm';
//import * as classes from './character-card.styles';
import * as classes from './hotel-card.styles';

interface Props {
  character: Character;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;
  const [selectedCharacter, setSelectedCharacter] = React.useState(null); // Nuevo estado para almacenar el personaje seleccionado


  // const handleEdit = async (id: number) => {
  //   // Aquí realizamos una solicitud al servidor JSON local para obtener los detalles del personaje
  //   try {
  //     const response = await fetch(`http://localhost:3001/characters/${id}`); // Cambia la URL según tu configuración
  //     const character = await response.json();
  //     setSelectedCharacter(character);
  //   } catch (error) {
  //     console.error('Error fetching character details:', error);
  //   }
  // };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.name.charAt(0)}</Avatar>}
        title={character.name}
        subheader={`${character.species} - ${character.status}`}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {`Gender: ${character.gender}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {`Location: ${character.location.name}`}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
