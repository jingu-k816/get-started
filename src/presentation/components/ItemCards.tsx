import React, { useEffect } from 'react';
import fetchItems from '../../infrastructure/api/fetch_Items';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core/';
import Button from './Button';
import useItemFetch from '../../application/hook';

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

  const { data, setData, showMore, showMoreItems } = useItemFetch(); 

  useEffect(() => {
    //Resolves promise to set the data from JSON into the custom hook.
    fetchItems()
    .then(res => setData(res.items))
    .catch(err => setData(err));
  },[setData])

  //Loading state
  if(data.length === 0) {
      return(<h1> Loading Items... </h1>);
  };

  //error state
  if(!Array.isArray(data)) {
    return(<h1>Failed to load items</h1>)
  }

  return (
    <div>
      <Grid direction="row" container>
      {Array.isArray(data) && data.slice(0, showMore).map((item) => {
        return (
          <Grid key={item.name} item md={4} xs={4} lg={4}>
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
      { showMore < data.length && <Button onChange={showMoreItems} name={'Load More...'}/>}
    </div>
  )
};

export default ItemCards;