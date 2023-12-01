import NextLink from "next/link";
import { SignInButton } from "./components/sign-in-button";
import { getUser } from "../auth";

export default async function HomePage() {
  const { isAuthenticated, user } = await getUser();

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>Welcome back{user?.firstName && `, ${user?.firstName}`}</h1>
          <p>You are now authenticated into the application</p>

          <NextLink href="/account">View account</NextLink>

          <SignInButton />
        </>
      ) : (
        <>
          <h1>AuthKit authentication example</h1>
          <p>Sign in to view your account details</p>
          <SignInButton large />
        </>
      )}
    </>
  );
}
