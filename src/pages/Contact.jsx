const Contact = () => (
  <section className="p-10 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
    <form className="flex flex-col space-y-4">
      <input type="text" placeholder="Your Name" className="p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="p-2 border rounded" />
      <textarea placeholder="Message" className="p-2 border rounded" rows="5"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
    </form>
  </section>
);

export default Contact;