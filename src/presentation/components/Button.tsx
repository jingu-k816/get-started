import React from 'react';
import {Button} from '@material-ui/core';

interface LoadButtonProps {
  onChange: React.MouseEventHandler<HTMLButtonElement>,
  name: string
}

const LoadButton: React.FC<LoadButtonProps> = ({onChange, name}) => {
  const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em auto',
    alignSelf: 'center'
  }

  return (
    <div style={btnStyle}>
      <Button variant='contained' onClick={onChange}>
        {name}
      </Button>
    </div>
  )
}

export default LoadButton;