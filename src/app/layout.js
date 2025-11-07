export const metadata = {
  title: 'Dolenix Security',
  description: 'Security, QA, and compliance done right.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

