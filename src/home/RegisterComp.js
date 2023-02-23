import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi"
import { FiEyeOff } from "react-icons/fi"
import axios from "axios";

export const Register = (props) => {
  const [showpass, setShow] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/usercrypto', data).then((res) => {
      console.log(res);
      localStorage.setItem('crypticUser', JSON.stringify(res.data.user))
    }).catch((error) => {
      alert(error.message)
    })

  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <Form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            type="text"
            {...register("Name", { required: true, maxLength: 20 })}
          />
        </Form.Field>
        {errors.Name && <p className="error-paragraph">Please check the Name</p>}
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
          <span className="passwordHolder">
            <input
              placeholder="Password"
              type={showpass ? 'password' : 'text'}
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {showpass && <FiEye className="showicon" onClick={() => setShow(false)} />}
            {!showpass && <FiEyeOff className="showicon" onClick={() => setShow(true)} />}
          </span>
        </Form.Field>
        {errors.password && <p className="error-paragraph">Please check the Password</p>}
        <Button type="submit">Register</Button>
      </Form>
      <div className="btn-div">
        <p className="text-btn">Already have an account? </p>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Login here.
        </button>
      </div>
    </div>
  );
};