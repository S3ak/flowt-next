export const endPoint =
  "https://bszu9o9dyk.execute-api.eu-west-1.amazonaws.com/dev/signup";

export const createAccount = async (data) => {
  const createdAccount = await fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return createdAccount.json();
};

export default createAccount;
