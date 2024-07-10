import { useState } from "react";

const useSignIn = () => {
  const [error, setError] = useState(null);
  const signIn = async (values) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      setError(error);
      // console.log(error);
    }
  };
  return { signIn, error };
};

export default useSignIn;
