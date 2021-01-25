import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const Error = ({ message, type, tittle }) => {
  return (
    <Alert severity={type}>
      <AlertTitle>{tittle}</AlertTitle>
      {message}
    </Alert>
  );
};

export default Error;
