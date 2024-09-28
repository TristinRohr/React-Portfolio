import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        'service_8jzr0zw',  // Replace with your EmailJS service ID
        'template_5wuye48', // Replace with your EmailJS template ID
        templateParams,     // Pass the form data
        'yJPAfPNB47sDownvp'      // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setFormStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setFormStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section className='contact'>
      <h2>Contact</h2>
      {formStatus && <p>{formStatus}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;