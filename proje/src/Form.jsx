import React, { useEffect, useState } from "react";
import './App.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    role: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {

  }, [formData])

  return (
    <div>
      <h1>Add a Team Member</h1>
      <form className="team-form" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input value={formData.name} id="name" type="text" name="name" onChange={inputChangeHandler} />
        <label htmlFor="email">E-mail</label>
        <input value={formData.email} id="email" type="email" name="email" onChange={inputChangeHandler} />
        <label htmlFor="location">City</label>
        <input value={formData.location} id="location" type="text" name="location" onChange={inputChangeHandler} />
        <label htmlFor="role">Role</label>
        <input value={formData.role} id="role" type="text" name="role" onChange={inputChangeHandler} />
        <button onSubmit={submitHandler} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
