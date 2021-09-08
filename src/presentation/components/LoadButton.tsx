import React from 'react';
import {Button} from '@material-ui/core'

const LoadButton: React.FC<{props?: any}> = () => {
  const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em auto',
    alignSelf: 'center'
  }

  return (
    <div style={btnStyle}>
      <Button variant='contained'>
        Load More...
      </Button>
    </div>
  )
}

export default LoadButton;