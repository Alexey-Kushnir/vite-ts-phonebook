import { FC } from 'react';
import { useContacts } from '../hooks';
import { ContactItem } from './ContactItem';

export const ContactsList: FC = () => {
  const visibleContacts = useContacts();

  return (
    <>
      {visibleContacts.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 'unset' }}>
          {visibleContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      )}
    </>
  );
};
