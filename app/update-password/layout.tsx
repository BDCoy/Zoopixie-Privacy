import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Your Password - Zoopixie",
  description:
    "Update your password to keep your Zoopixie account secure and continue creating amazing AI animations from your drawings.",
};

export default function UpdatePasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
