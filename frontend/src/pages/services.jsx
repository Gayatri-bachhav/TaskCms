import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCheckCircle } from 'react-icons/fa';
import API from '../services/api';

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const res = await API.get('/services');
      setData(res.data);
    };
    getContent();
  }, []);

  return (
    <div className="min-h-screen py-16 px-6 lg:px-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-2">Discover what we offer to meet your needs</p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center bg-white shadow-xl rounded-3xl overflow-hidden`}
          >
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-4">
              <div className="flex items-center space-x-3 text-blue-600 text-sm font-semibold uppercase tracking-wide">
                <FaTools />
                <span>Service #{index + 1}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>

              {/* Optional Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Premium</span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Support</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">24/7</span>
              </div>

            
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-[420px] overflow-hidden">
              <img
                src="https://anantkamalwademo.online/assets/imgs/page/homepage6/banner.png"
                alt="Service"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
