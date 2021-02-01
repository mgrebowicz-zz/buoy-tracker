import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput 
              id="component-outlined"
              label="Email" 
              type="text" 
              name="email" 
              value={credentials.email} 
              onChange={handleChange}
              required 
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput 
              label="Password" 
              variant="outlined"
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required
            />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">LOG IN</Button>
        </form>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <span>Don't have an account?</span>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}