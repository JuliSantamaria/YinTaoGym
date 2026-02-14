import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Gym - Tu Gimnasio de Élite",
  description: "Transforma tu cuerpo, transforma tu vida. El mejor gimnasio con equipamiento de última generación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
