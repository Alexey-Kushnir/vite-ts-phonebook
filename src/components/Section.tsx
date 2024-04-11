import { FC, ReactNode } from 'react';
import { Typography, Container } from '@mui/material';

export const Section: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Container sx={{ padding: '0 20px', margin: '50 auto', width: 400 }}>
      <Typography
        variant='h2'
        sx={{
          // color: 'red',
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop: '40px',
          margin: '0 0 20px 0',
        }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
};
