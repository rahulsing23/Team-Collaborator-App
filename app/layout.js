import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
const inter = Outfit({ subsets: ["latin"]})

export const metadata = {
  title: "Collab Master",
  description: "Use to share file, idea and project to team",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
