import { useEffect, useState } from 'react';
import { fb } from '../../services/';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import PageAttributes from '../../pages/PageAttributes';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const [validation, setValidation] = useState(false);

  let history = useHistory();

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
          history.push('/');
          //console.log(res.user);
          // else if (res.user) {
          //   setError('Identifié !')
          // }
        })
        .catch((err) => {
          if (err.code === 'auth/invalid-email' || err.code === 'auth/wrong-password') {
            setError('Identifiants incorrects');
          } else if (err.code === 'auth/user-not-found') {
            setError("Aucun compte n'est lié à cette adresse email");
          }
        });
    }
  };

  return (
    <>
      <PageAttributes bodyID="login" pageTitle="S'identifier" />
      <section className="login container">
        <h1>S'identifier</h1>
        <div className="admin-form">
          <div className="form-body">
            <div className="form-item">
              <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-item">
              <input type="password" value={password} placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <Button small title="Se connecter" onClick={login} disabled={!valid} />
          {error && <div>{error}</div>}
          {validation && <div>{validation}</div>}
        </div>
      </section>
    </>
  );
};
