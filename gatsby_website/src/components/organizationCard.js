import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core/';
import { CardActions, Typography, Button } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  card: {
  },
  media: {
    width: "100%",
    height: "500px",
  },
  actions: {
    display: 'flex',
  },
  expand: {
    marginLeft: 'auto',
  },
}));

export default function OrganizationCard({title, subHeader, description,
                                           imageFile, imageTitle, link}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={imageFile}
        title={imageTitle}
      />
      <CardContent>
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6">
          {subHeader}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <Button
          href={link}
          className={classes.expand}
          size="small"
          color="primary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}