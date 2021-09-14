import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core/';
import Button from './Button';
import useItems from '../../application/hook';
import LoadStatus from './LoadStatus';

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
  }
});

const ItemCards: React.FC = () => {
  const classes = useStyles();
  const { data, showMoreItems, showStatus } = useItems(); 

  return (
    <div>
      <Grid direction="row" container>
      {showStatus? <LoadStatus message="Loading Items..." /> : false}
      {Array.isArray(data) && data.map((item, index) => {
        return (
          <Grid key={index} item md={4} xs={4} lg={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}  gutterBottom>
                  {item}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
      </Grid>
      {!showStatus && <Button onChange={showMoreItems} name={'Load More...'}/>}
    </div>
  )
};

export default ItemCards;