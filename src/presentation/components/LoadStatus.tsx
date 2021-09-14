import React from 'react';

type StatusMessage = {
  message: string
};

const LoadStatus: React.FC<StatusMessage> = ({ message}) => {
  return ( <h1>{message}</h1> );
};

export default LoadStatus;