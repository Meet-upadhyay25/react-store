import React from "react";

const useSignUp = () => {
  const signUp = async (values) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          username: values.username,
          password: values.password,
          name: {
            firstName: values.firstName,
            lastName: values.lastName,
          },
          address: {
            city: values.city,
            street: values.street,
            number: values.number,
            zipcode: values.zipcode,
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: values.phone,
        }),
      });

      const data = await response.json();
      console.log(values);
      console.log(data);
    } catch (error) {}
  };

  return { signUp };
};

export default useSignUp;
