import { getUser } from "../../auth";

export default async function AccountPage() {
  const { user } = await getUser();

  const userFields = user && [
    ["First name", user.firstName],
    ["Last name", user.lastName],
    ["Email", user.email],
    ["Id", user.id],
  ];

  return (
    <>
      <h1>Account details</h1>
      <p>Below are your account details</p>

      {userFields && (
        <dl>
          {userFields.map(([label, value]) => (
            <>
              <dt>{label}</dt>
              <dd>{value || ""}</dd>
            </>
          ))}
        </dl>
      )}
    </>
  );
}
