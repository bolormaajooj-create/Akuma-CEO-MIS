import './globals.css';

export const metadata = {
  title: 'Akuma MIS',
  description: 'Akuma CEO Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
