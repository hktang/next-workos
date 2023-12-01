import type { Metadata } from "next";
import NextLink from "next/link";
import { SignInButton } from "./components/sign-in-button";

export const metadata: Metadata = {
  title: "Example AuthKit Authenticated App",
  description: "Example Next.js demonstrating how to use AuthKit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        <NextLink href="/">Home</NextLink>
        <NextLink href="/account">Account</NextLink>
        <SignInButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
