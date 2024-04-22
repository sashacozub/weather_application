'use client';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
// import type { Metadata } from 'next';
import './globals.css';

// export const metadata: Metadata = {
//   title: 'Weather Application',
//   description:
//     'Simple weather application created using Next.js and opeanweathermap API',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang='en'>
      <QueryClientProvider client={queryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
