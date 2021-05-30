import { useEffect, useState } from 'react';
import { fb } from '../../services/';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    setValid(email && password);
  }, [email, password]);

  const login = () => {
    if (valid) {
      setError('');
      fb.auth
        .signInWithEmailAndPassword(email, password)
        // .then(console.log('Login success !'));
        .then((res) => {
          if (!res.user) {
            setError('Erreur');
          }
          setValidation('Identifié !');
          console.log(res.user);
          // else if (res.user) {
          //   setError('Identifié !')
          // }
        })
        .catch((err) => {
          if (
            err.code === 'auth/invalid-email' ||
            err.code === 'auth/wrong-password'
          ) {
            setError('Identifiants incorrects');
          } else if (err.code === 'auth/user-not-found') {
            setError("Aucun compte n'est lié à cette adresse email");
          }
        });
    }
  };

  return (
    <div>
      Login Page
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
      <button onClick={login} disabled={!valid}>
        Login
      </button>
      {error && <div>{error}</div>}
      {validation && <div>{validation}</div>}
    </div>
  );
};
