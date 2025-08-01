import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import API from '../services/api';

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const res = await API.get('/about');
      setData(res.data);
    };
    getContent();
  }, []);

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black">
        <img
          src="https://anantkamalwademo.online/assets/imgs/page/homepage6/banner.png"
          alt="About Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* Dynamic About Content */}
      <div className="max-w-6xl mx-auto py-16 px-4 space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 items-center"
          >
            <img
              src="https://anantkamalwademo.online/assets/imgs/page/homepage6/banner.png"
              alt="About Image"
              className="w-full lg:w-1/2 rounded-xl shadow-lg"
            />
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Our Mission Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We aim to deliver top-notch solutions that empower our clients to grow
            digitally. With innovation at our core, we’re committed to excellence,
            integrity, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-10 text-center">
        {[
          { title: 'Expert Team', desc: 'Our professionals are highly skilled and experienced in the latest technologies.' },
          { title: 'Client Focused', desc: 'We prioritize our clients’ goals and success above all else.' },
          { title: 'Scalable Solutions', desc: 'We offer flexible services that grow with your business needs.' },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 shadow-lg rounded-xl border"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA + Contact */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-100 text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-100 text-black"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded bg-gray-100 text-black"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded text-white font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2183823552436!2d72.81937601490108!3d19.14083028704916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7446d77be8f%3A0x4cb8d9096cdd1c4!2sMumbai!5e0!3m2!1sen!2sin!4v1693804567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
