import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const App = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <input name="firstname" ref={register} data-testid="first-name-input" />
        <input
          name="lastname"
          ref={register({ required: true })}
          data-testid="last-name-input"
        />
        {errors.lastname && (
          <span data-testid="error-last-name-span">Last name is required.</span>
        )}
        <input name="age" ref={register({ pattern: /\d+/ })} />

        {errors.age && (
          <span data-testid="error-age-span">Age is required.</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};
