import "./globals.css";

export const metadata = {
  title: "MRK.ER BOT",
  description: "Advanced WhatsApp Automation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
