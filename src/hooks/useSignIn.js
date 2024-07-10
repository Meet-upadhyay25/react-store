import { useState } from "react";
import { addToken } from "../reducer/authSlice";
import { useDispatch } from "react-redux";

const useSignIn = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
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
      dispatch(addToken(data.token))
      return data;
    } catch (error) {
      setError(error);
    }
  };
  return { signIn, error };
};

export default useSignIn;
