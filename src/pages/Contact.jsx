import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send message. Try again later.');
      });
  };

  return (
    <section className="p-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input name="user_name" type="text" placeholder="Your Name" className="p-2 border rounded" required />
        <input name="user_email" type="email" placeholder="Your Email" className="p-2 border rounded" required />
        <textarea name="message" placeholder="Message" className="p-2 border rounded" rows="5" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
