import { Layout } from '../components/Layout';
import ThemeRegistry from '../components/ThemeRegistry';

export const metadata = {
  title: 'Auth App',
  description: 'A secure authentication system built with Next.js, Firebase, and Material-UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
} 