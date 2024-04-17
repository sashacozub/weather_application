import './globals.css';

export const metadata = {
  title: 'Weather Application',
  description:
    'Simple weather application created using Next.js and opeanweathermap API',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
