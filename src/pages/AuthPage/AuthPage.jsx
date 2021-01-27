import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Button from '@material-ui/core/Button'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>Welcome to BuoyTracker</h1>
      {showLogin ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
      <Button variant="contained" color="secondary" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'LOG IN' : 'SIGN UP'}</Button>
    </main>
  );
}