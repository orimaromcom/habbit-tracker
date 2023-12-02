import "./ui/globals.css";

export const metadata = {
  title: "Ori Admin Dashboard",
  description: "Next Admin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="roboto">{children}</body>
    </html>
  );
}
