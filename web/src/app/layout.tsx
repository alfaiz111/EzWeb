import Navbar from "./components/Navbar";
export const metadata = {
  title: "Portfolio Faiz",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
          <Navbar />{children}</body>
    </html>
  );
}