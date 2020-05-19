import React from "react";
import { useForm } from "react-hook-form";

export const App = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" ref={register} />
      <input name="lastname" ref={register({ required: true })} />
      {errors.lastname && "Last name is required."}
      <input name="age" ref={register({ pattern: /\d+/ })} />
      {errors.age && "Please enter number for age."}
      <input type="submit" />
    </form>
  );
};
