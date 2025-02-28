import React, { useState, ChangeEvent, FormEvent } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validate = (): boolean => {
    const tempErrors = { name: '', email: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Optionally, clear the form after submission:
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form" aria-label="User Input Form">
      <div className="form-group">
        <label htmlFor="name">Name <span aria-hidden="true">*</span>:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="nameError"
          required
        />
        {errors.name && <span id="nameError" role="alert">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email <span aria-hidden="true">*</span>:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="emailError"
          required
        />
        {errors.email && <span id="emailError" role="alert">{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
