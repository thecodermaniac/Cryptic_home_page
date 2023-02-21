import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && <p className="error-paragraph">Please check the Email</p>}
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </Form.Field>
        {errors.password && <p className="error-paragraph">Please give a suitable password</p>}
        <Button type="submit">Login</Button>
      </Form>
      <div className="btn-div">
        <p className="text-btn">Don't have an account? </p>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Register here.
        </button>
      </div>
    </div>
  );
};
