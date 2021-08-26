export const endPoint = "https://signup.free.beeceptor.com";

const createAccount = async (data) => {
  try {
    const createdAccount = await fetch(endPoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return createdAccount.json();
  } catch (error) {
    console.warn("error >>>", error);

    return error;
  }
};

export default createAccount;
