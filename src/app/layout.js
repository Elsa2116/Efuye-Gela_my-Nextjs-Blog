import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Next.js Blog",
  description: "Built during Zemenay Tech Week 5 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <Navbar />
        <main className="max-w-4xl mx-auto mt-8">{children}</main>
      </body>
    </html>
  );
}
