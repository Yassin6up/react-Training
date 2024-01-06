import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {deleteContact} from "../../state/ListContactSlice/listContact.js"

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

import DeleteIcon from '@mui/icons-material/Delete';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ContactCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.name.slice(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title={props.name + " " + props.lastName}
        subheader={props.date}
      />
      
      <CardMedia
        component="img"
        height="194"
        image="https://th.bing.com/th/id/R.55d049570657a7edfc208740d0df813c?rik=MDRfHthZOfpnBg&pid=ImgRaw&r=0"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          you can see more details about this contact #{props.matricule}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Link to={`/updateContact/${props.matricule}`}><EditIcon /></Link>
        </IconButton>
        <IconButton aria-label="share">
        <button class="btn" onClick = { ()=> dispatch(deleteContact(props.matricule))} ><DeleteIcon /> </button>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Telephone & Email:</Typography>
          <Typography paragraph>
            {props.telephone}
           
          </Typography>
          <Typography paragraph>
            {props.email}
          </Typography>

          
          
        </CardContent>
      </Collapse>
    </Card>
  );
}









