import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm';

export default function Login(): ReactNode {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
