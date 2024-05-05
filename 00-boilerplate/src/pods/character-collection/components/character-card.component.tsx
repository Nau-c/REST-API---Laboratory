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
import { Character } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: Character;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;
  const [selectedCharacter, setSelectedCharacter] = React.useState(null); // Nuevo estado para almacenar el personaje seleccionado


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
