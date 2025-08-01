import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import API from '../services/api';

const Contact = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const getContent = async () => {
      const res = await API.get('/contact');
      setData(res.data);
    };
    getContent();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-12">
      {data.map((item, index) => (
        <motion.div
          key={item._id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-white"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Google Map */}
            <div className="h-96 lg:h-full w-full">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160988646!2d72.74110195852784!3d19.082522317435854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e7e0bfe3d%3A0x5f4f5d5c5de5db2a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626796386748!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Right: Contact Details & Form */}
            <div className="p-10 lg:p-14 bg-white flex flex-col justify-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>

              {/* Contact Info */}
              <div className="space-y-4 text-gray-700 text-sm">
                {item.address && (
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-xl mt-1 text-blue-600" />
                    <p><strong>Address:</strong> {item.address}</p>
                  </div>
                )}
                {item.email && (
                  <div className="flex items-start gap-3">
                    <FiMail className="text-xl mt-1 text-blue-600" />
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline">{item.email}</a>
                    </p>
                  </div>
                )}
                {item.phone && (
                  <div className="flex items-start gap-3">
                    <FiPhone className="text-xl mt-1 text-blue-600" />
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href={`tel:${item.phone}`} className="text-blue-600 hover:underline">{item.phone}</a>
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Contact;
