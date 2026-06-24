import { useState } from 'react';

const initialForm = { name: '', email: '', password: '' };

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name should not be empty.';
    }
    if (!formData.email.includes('@')) {
      nextErrors.email = 'Email must contain @.';
    }
    if (formData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(`Registration successful for ${formData.name}.`);
      setFormData(initialForm);
    } else {
      setSuccess('');
    }
  }

  return (
    <main className="page">
      <form className="form-card" onSubmit={handleSubmit} noValidate>
        <p className="eyebrow">Experiment 9</p>
        <h1>Registration Form</h1>
        <p className="summary">Controlled inputs, useState, validation, and form submission.</p>

        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Password
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <button type="submit">Submit Registration</button>
        {success && <p className="success">{success}</p>}
      </form>
    </main>
  );
}

export default App;
