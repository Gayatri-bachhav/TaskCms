import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
       
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-gray-800">Anantkamal </span>
            <span className="text-orange-500">WADEMO</span>
          </h1>
          <p className="mt-4">Product By</p>
          <p className="text-gray-600">akgraphicsstudios, Nashik, Maharashtra (IN)</p>
          <p className="mt-4 font-semibold">
            Hours: <span className="font-normal">9:00 - 9:00, Mon - Sat</span>
          </p>

          <div className="mt-6">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-3 text-xl text-gray-600">
              <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
              <FaYoutube className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
        </div>

     
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Mission & Vision</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Press & Media</li>
            <li>Advertising</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Ressources</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Learning Hub</li>
            <li>Whatsapp Business API</li>
            <li>Experience Notifications</li>
            <li>Create Whatsapp Link</li>
            <li>Whatsapp Button</li>
            <li>Learn Chatbot Development</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Use Cases – Refer</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Request A Demo</li>
            <li>Become a Partner</li>
            <li>Refund Policy</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">We are Available on</h3>
          <p className="text-gray-600 mb-2">
            Download our Apps and get extra 15% Discount on your first Order...!
          </p>
          <div className="flex flex-col space-y-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 w-auto"
            />
          </div>
          <p className="font-semibold">Secured Payment Gateways</p>
          <div className="flex space-x-2 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="MasterCard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Maestro_2016_logo.svg"
              alt="Maestro"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/RuPay_logo.svg"
              alt="Rupay"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
