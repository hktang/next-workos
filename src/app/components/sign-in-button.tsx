import { clearCookie, getAuthorizationUrl, getUser } from "../../auth";

export async function SignInButton({ large }: { large?: boolean }) {
  const { isAuthenticated } = await getUser();
  const authorizationUrl = await getAuthorizationUrl();

  if (isAuthenticated) {
    return (
      <form
        action={async () => {
          "use server";
          await clearCookie();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    );
  }

  return <a href={authorizationUrl}>Sign In {large && "with AuthKit"}</a>;
}
