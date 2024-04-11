import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm';

export default function Register(): ReactNode {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
