import './globals.css';

export const metadata: Metadata = {
  title: 'Weather Application',
  description:
    'Simple weather application created using Next.js and opeanweathermap API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
