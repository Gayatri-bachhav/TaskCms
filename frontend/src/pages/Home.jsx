
import { useEffect, useState } from 'react';
import API from '../services/api';
import { motion } from 'framer-motion';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const res = await API.get('/home');
      setData(res.data);
    };
    getContent();
  }, []);

  return (
    <div className="space-y-24 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">Welcome to Anant Kamalwa</h1>
          <p className="text-xl text-gray-300">
            Elevate your business with our expert IT solutions tailored for your growth.
          </p>
          <button className="mt-6 px-8 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-full text-lg font-semibold">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: '🖥️', title: 'Web Development', desc: 'Custom websites tailored for your brand.' },
            { icon: '📱', title: 'App Development', desc: 'Mobile-first solutions for iOS & Android.' },
            { icon: '⚙️', title: 'Automation', desc: 'Streamline operations using smart tech.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <div className="lg:w-1/2">
              <img
                src="https://anantkamalwademo.online/assets/imgs/page/homepage6/banner.png"
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-gray-100">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: 'Anita Sharma', text: 'Exceptional service and support!' },
            { name: 'Rahul Mehta', text: 'Our go-to team for all tech needs.' },
            { name: 'Pooja Verma', text: 'Professional, reliable, and creative.' },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded-lg">
              <p className="italic text-gray-600">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-20 px-6 text-white text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">Let’s Work Together</h2>
        <p className="text-lg mb-6 text-gray-400">Reach out today for a custom quote or project discussion.</p>
        <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition">
          Send Message
        </button>
      </section>
    </div>
  );
};

export default Home;
