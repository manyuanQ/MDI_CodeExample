import React, { useState } from 'react';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({ name: '', email: '' });

    const validate = () => {
        let tempErrors = { name: '', email: '' };
        let isValid = true;

        if (!formData.name) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is not valid';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Handle form submission logic here
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-label="User Input Form">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-describedby="nameError"
                />
                {errors.name && <span id="nameError" role="alert">{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby="emailError"
                />
                {errors.email && <span id="emailError" role="alert">{errors.email}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;