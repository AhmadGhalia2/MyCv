import { useState } from 'react';
// import Header from "../../components/header/Header"
// import Footer from '../../components/Footer';
import Submitted from './Submitted';
import './contact.css';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [status, setStatus] = useState('')
  function handleClose() {
    setIsSubmitted(false)
    setStatus('')
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/sendFormInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted:', result);
      setIsSubmitted(true);
      setStatus('success')
      // alert('Thank you for reaching out! We will get back to you soon.');

      // Reset the form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // alert('There was an error submitting your message. Please try again.');
      setIsSubmitted(true)
      setStatus('wrong')
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <Submitted isVisable={isSubmitted} onClose={handleClose} status={status} />
      <main>
        
        <div className="contact-container">
          <h2>Contact Me</h2>

          <div className="contact-info">
            <p><strong>Mobil:</strong> 0736163769</p>
            <p><strong>Mejladress:</strong> <a href="mailto:ahmadghalea@gmail.com">ahmadghalea@gmail.com</a></p>
            <p><strong>Adress:</strong> Framtidsvägen 4 Lgh 1006, Växjö</p>
          </div>

          <div className="contact-form">
            <h3>Or send me a message:</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>

              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>

              <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} required />
              </label>

              <button className='button' type="submit">Send Message</button>
            </form>
          </div>
        </div>

      </main>
      {/* <Footer /> */}
    </div>
  );
}
