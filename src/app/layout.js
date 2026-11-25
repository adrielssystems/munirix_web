import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || 'https://munirix.net'),
  title: "Munirix — Agentes de IA Personales y Empresariales",
  description:
    'La integración sencilla para crear agentes de IA multipropósito conectados a WhatsApp, Google Calendar, Gmail, Drive, Sheets y el modelo que prefieras.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Munirix — Agentes de IA Personales y Empresariales',
    description:
      'Conecta WhatsApp, Google Calendar, Gmail, Drive y el modelo de IA que prefieras en un agente multipropósito listo en minutos.',
    url: 'https://munirix.net',
    siteName: 'Munirix',
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/brand/Logo_Munirix_sin_fondo.png',
    shortcut: '/brand/Logo_Munirix_sin_fondo.png',
    apple: '/brand/Logo_Munirix_sin_fondo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
