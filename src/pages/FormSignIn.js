import React, { useState } from 'react';
import API from '../api';
import Error from '../componets/Error';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

export default function FormSignIn({ history }) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  async function submit(e) {
    e.preventDefault();
    const {
      name,
      username,
      email,
      password,
      passwordConfirmation,
    } = e.target.elements;
    try {
      await API.registerUser({
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      });
      history.push('/login');
    } catch (error) {
      console.error(error);
      setError(true);
      setMensajeError(error);
    }
  }

  return (
    <React.Fragment>
      <Typography
        variant="h5"
        component="h2"
        className={classes.title}
        gutterBottom
      >
        Sign In
      </Typography>
      {error && <Error message={mensajeError} type="error" tittle="Error" />}
      <form onSubmit={submit}>
        <TextField
          label="Name:"
          variant="outlined"
          name="name"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="User name:"
          variant="outlined"
          name="username"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Email:"
          variant="outlined"
          name="email"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Password:"
          variant="outlined"
          name="password"
          type="password"
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Confirm password:"
          variant="outlined"
          name="passwordConfirmation"
          type="password"
          fullWidth
          className={classes.input}
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </React.Fragment>
  );
}
