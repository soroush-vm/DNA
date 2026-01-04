import "./globals.css";

export const metadata = {
  title: "DNA Visualization",
  description: "Scroll-driven DNA interactive visualization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
