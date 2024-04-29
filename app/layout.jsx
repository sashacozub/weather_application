'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <QueryClientProvider client={queryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
