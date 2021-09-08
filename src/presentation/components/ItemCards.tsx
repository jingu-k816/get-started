import React, {useState, useEffect} from 'react';
import apiCallFunc from '../../infrastructure/api/jsonCall';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography, Grid, Button} from '@material-ui/core/';
import LoadButton from './LoadButton';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '2em 6em',
    maxWidth: '300px',
    height: '200px',
    boxShadow: "0 6px 20px -2px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});
const ItemCards: React.FC<{props?: any}> = () => {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    apiCallFunc().then(res => setData(res.items));
  },[])

  return (
    <div>
      <Grid direction="row" container>
      {data && data.map((item) => {
        return (
          <Grid key={item.name} item md={4} xs={4} lg={4} spacing={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}  gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
            </Grid>
        )
      })}
      </Grid>
      <LoadButton />
    </div>
  )
};

export default ItemCards;