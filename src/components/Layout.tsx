import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar';
import { Suspense } from 'react';

export const Layout: FC = () => {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};
