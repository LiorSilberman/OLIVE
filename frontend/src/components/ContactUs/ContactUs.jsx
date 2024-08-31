import React, { useState } from 'react';
import './ContactUs.css';
import Swal from 'sweetalert2'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = 'Invalid phone number';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(e);
      setFormData({ name: '', phone: '', message: '' });
    } else {
      setSubmitStatus('Please correct the errors in the form.');
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "56400b42-f216-40f6-84d8-3375982d5af8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Good job!",
            text: "ההודעה נשלחה בהצלחה!",
            icon: "success"
        }).then(() => {
        setErrors({});
        setSubmitStatus('');
        });
    }
  };

  return (
    <div className="contact-us-container" id='contact-us'>
      <h2>עוד צעד קטן</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">שם:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">מספר פלאפון:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">הערות:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">שלח</button>
      </form>
      {submitStatus && <div className="submit-status">{submitStatus}</div>}
    </div>
  );
};

export default ContactUs;