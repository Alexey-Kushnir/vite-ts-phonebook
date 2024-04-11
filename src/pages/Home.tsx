import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export default function Home(): ReactNode {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1
        style={{
          fontWeight: 500,
          fontSize: 48,
          textAlign: 'center',
        }}
      >
        Phonebook welcome page
      </h1>
    </div>
  );
}
