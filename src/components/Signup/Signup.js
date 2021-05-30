import { useEffect, useState } from 'react';
import { fb } from '../../services/';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(email && password && password === verifyPassword);
  }, [email, password, verifyPassword]);

  const signup = () => {
    if (valid) {
      fb.auth
        .createUserWithEmailAndPassword(email, password)
        .then(console.log('SignupSuccess !'));
    }
  };

  return (
    <div>
      Signup Page
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={verifyPassword}
        placeholder="Confirmation mot de passe"
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <button onClick={signup} disabled={!valid}>
        Signup
      </button>
    </div>
  );
};
