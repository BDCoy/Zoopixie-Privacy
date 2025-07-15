import "./globals.css";
import type { Metadata } from "next";
import { Baloo_Tammudu_2 } from "next/font/google";
import { ToastContainer } from "react-toastify";

const baloo = Baloo_Tammudu_2({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Privacy Policy - Zoopixie",
  description:
    "Privacy Policy for Zoopixie - Protecting children's privacy while they create amazing AI animations from their drawings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
